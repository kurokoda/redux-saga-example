function applicationInitializeService() {
  return () => {
    const delayModifier = 2000;
    const delay = 1000 + Math.random() * delayModifier;
    return new Promise(resolve => setTimeout(resolve, delay));
  };
}

export { applicationInitializeService };
