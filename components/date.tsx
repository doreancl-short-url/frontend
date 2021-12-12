import {format, parseISO} from 'date-fns'
import {FunctionComponent} from "react";

const Date: FunctionComponent<{ dateString: string }> = ({dateString}) => {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL	d, yyyy')}</time>
};
export default Date
