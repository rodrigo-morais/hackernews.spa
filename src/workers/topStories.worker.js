import { getTopStories } from './topStories'

onmessage = () => {
	getTopStories(postMessage)
}
