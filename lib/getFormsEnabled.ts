const getFormsEnabled = (): boolean => {
  return process.env.FORMS_ENABLED === 'true';
};

export {
  getFormsEnabled,
};
