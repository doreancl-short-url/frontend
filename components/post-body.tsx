import {FunctionComponent} from "react";

const PostBody: FunctionComponent<{ content: any }> = ({content}) => (
  <div className="max-w-2xl mx-auto">
    <div>
      {content}
    </div>
  </div>
);
export default PostBody
