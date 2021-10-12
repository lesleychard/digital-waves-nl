import { useCallback } from 'react';
import { Resolver } from 'react-hook-form';
import * as Yup from 'yup';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useYupValidationResolver = (validationSchema: Yup.AnySchema): Resolver<any, any> => {
  return useCallback(
    async data => {
      try {
        const values = await validationSchema.validate(data, {
          abortEarly: false,
        });

        return {
          values,
          errors: {},
        };
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      catch (errors: any) {
        return {
          values: {},
          errors: errors.inner.reduce(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (allErrors: any, currentError: any) => ({
              ...allErrors,
              [currentError.path]: {
                type: currentError.type ?? 'validation',
                message: currentError.message,
              },
            }),
            {}
          ),
        };
      }
    },
    [validationSchema]
  );
};

export default useYupValidationResolver;
