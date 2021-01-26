import React from 'react'
import data from '../FakeData.json'

const Post = (props) => {
  console.log(props)
// destructured form of line 9 with post.id
  const { match: {params: {post_id} } } = props
  // find method return an object, while fiter() returns a whole array
	const post = data.find(
		(post) => post.id === parseInt(post_id)
	)
	return (
		<div className="post">
			<div className="hero">
				<img src={post.image} alt="post banner" />
			</div>
			<div className="content">
				<h3>{post.title}</h3>
				<p>{post.body}</p>
			</div>
		</div>
	)
}
export default Post