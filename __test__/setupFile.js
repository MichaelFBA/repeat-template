// https://github.com/facebook/jest/issues/2297
Object.defineProperty(document, 'currentScript', {
  value: document.createElement('script'),
});
