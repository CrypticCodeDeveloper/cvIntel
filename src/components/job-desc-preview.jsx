import Markdown from "react-markdown";
import rehypeRaw from 'rehype-raw'

const JobDescriptionPreview = ({description}) => {
  return <Markdown rehypePlugins={[rehypeRaw]}>{description}</Markdown>
}

export default JobDescriptionPreview;
