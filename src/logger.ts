import { createLogger, format, transports } from 'winston'

const { combine, timestamp, prettyPrint } = format

const logger = createLogger({
  level: 'info',
  format: combine(format.json(), timestamp(), prettyPrint()),
  transports: [new transports.File({ filename: 'combined.log' })],
})

if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new transports.Console({
      format: format.simple(),
    }),
  )
}
export default logger
