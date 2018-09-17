import { getTopStories } from './topStories'

onmessage = (e) => {
	getTopStories(e.data, postMessage)
}
