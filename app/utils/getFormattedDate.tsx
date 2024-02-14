import moment from "moment"
import "moment/locale/fr"

export const getFullFormattedDate = (date: string) => {
	const event = moment(date)
		.locale("fr")
		.format("dddd, D MMMM YYYY")
		.toUpperCase()
		.replace(",", "")

	return event
}

export const getFormattedTime = (date: string) => {
	const event = moment(date).format("HH:mm")

	return event
}

export const getFormattedDateFromUnix = (date: number) => {
	const event = moment.unix(date).format("MM/DD/YYYY")

	return event
}
