import { getComments } from './comments'

onmessage = (e) => {
	getComments(e.data, postMessage)
}
