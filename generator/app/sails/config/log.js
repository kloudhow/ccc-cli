const { createLogger, format, transports } = require('winston');

const GCPStackDriver = format.printf(info => {
  info.severity = info.level;
  return info;
});

const customLevelLogger = createLogger({
  format: format.combine(
    GCPStackDriver,
    format.json(),
  ),
  transports: [new transports.Console({ level: 'verbose' })]
});

module.exports.log = {
  custom: customLevelLogger,
  // // Disable captain's log so it doesn't prefix or stringify our meta data.
  inspect: false,
  level: 'verbose'
};
