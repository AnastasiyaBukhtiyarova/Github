function createLogger() {
  let logger = [];

  return {
    warn: function (str) {
      logger.push({
        message: str,
        dateTime: new Date(),
        type: 'warn',
      });
    },
    error: function (str) {
      logger.push({
        message: str,
        dateTime: new Date(),
        type: 'error',
      });
    },
    log: function (str) {
      logger.push({
        message: str,
        dateTime: new Date(),
        type: 'log',
      });
    },
    getRecords: function (str) {
      if (!str) {
        return logger;
      }
      return logger
        .filter((i) => i.type === str)
        .sort((a, b) => b.dateTime.getTime() - a.dateTime.getTime());
    },
  };
}

// examples
const logger1 = createLogger();
logger1.log('User logged in');
logger1.warn('User is tring to ented restricted page');
logger1.log('User logged out');
logger1.error('Unexpected error on the site');

console.log(logger1.getRecords()); // ===> [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }, { message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User is tring to ented restricted page', type: 'warn', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
logger1.getRecords('log'); // ===> [{ message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
logger1.getRecords('error'); // ===> [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }]
logger1.getRecords('warn'); // ===> [{ message: 'User is tring to ented restricted page', type: 'warn', dateTime: Date }]

const logger2 = createLogger();
logger2.warn('Opps, something is happenning');
logger2.getRecords('error'); // ===> []
logger2.getRecords('warn'); // ===> [{ message: 'Opps, something is happenning', type: 'warn', dateTime: Date }]
logger2.getRecords(); // ===> [{ message: 'Opps, something is happenning', type: 'warn', dateTime: Date }]

const logger3 = createLogger();
logger3.getRecords('error'); // ===> []
logger3.getRecords(); // ===> []
