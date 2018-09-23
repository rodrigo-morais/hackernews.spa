import { HN_API, HN_FIRST_PAGE, HN_NEXT_PAGE } from '../constants'

const getFetchItems = (stories, page) => stories
  .slice(30 * page, 30 * page + 30)
  .map(async (story) => {
    const res = await fetch(`${HN_API}item/${story}.json`)
    return res.json()
  })

export const getTopStories = async (page, postMessage) => {
  const res = await fetch(`${HN_API}topstories.json`)
  const stories = await res.json()
  const firstPage = await getFetchItems(stories, 0)

  const items = await Promise.all(firstPage)

  postMessage({ key: HN_FIRST_PAGE, data: items, page })

  if (page) {
    const nextPage = await getFetchItems(stories, page)
		const nextItems = await Promise.all(nextPage)

    postMessage({ key: HN_NEXT_PAGE, data: nextItems, page })
  }

  return items
}
