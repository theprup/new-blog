import formatDate from './formatDate'

test ('if it works', () => {
    expect(formatDate(new Date(2013, 0, 11)))
    .toBe('January 11, 2013')

    expect(formatDate(new Date(2013, 0, 10)))
    .toBe('January 10, 2013')
}
)
