import { formatDate, formatHour } from "@utils"

describe('utils', ()=>{
  it('should return the date with the format MMMM D, YYYY', () => {
    const result = formatDate('2017-03-09T05:22:00.000Z');
    expect(result).toEqual('March 9, 2017')
  })

  it('should return the date with the format hh A', () => {
    const result = formatHour('2017-03-09T05:22:00.000Z');
    expect(result).toEqual('02 AM')
  })
})