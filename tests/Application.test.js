import Application from '../src/Application.js';

describe(Application, () => {
  describe(Application.run, () => {
    // Feel free to remove this test if you remove the console statement.
    it('prints a message to the console', () => {
      const logSpy = jest.spyOn(console, 'log');

      Application.run();

      expect(logSpy).toHaveBeenCalledWith('Starting application...');
    });

    it('should be a function', () => {
      expect(typeof Application.run).toBe('function');
    });
  });
});
