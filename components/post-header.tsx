import Avatar from '../components/avatar'
import Date from '../components/date'
import CoverImage from '../components/cover-image'
import PostTitle from '../components/post-title'
import Categories from '../components/categories'
import {FunctionComponent} from "react";
import {Author, Category} from "../types/types";

const PostHeader: FunctionComponent<{
  title: string,
  coverImage: string,
  date: string,
  author: Author,
  categories: Category[]
}> = ({title, coverImage, date, author, categories}) => (
  <>
    <PostTitle>{title}</PostTitle>
    <div className="hidden md:block md:mb-12">
      <Avatar author={author}/>
    </div>
    <div className="mb-8 md:mb-16 sm:mx-0">
      <CoverImage title={title} src={coverImage}/>
    </div>
    <div className="max-w-2xl mx-auto">
      <div className="block md:hidden mb-6">
        <Avatar author={author}/>
      </div>
      <div className="mb-6 text-lg">
        Posted <Date dateString={date}/>
        <Categories categories={categories}/>
      </div>
    </div>
  </>
);
export default PostHeader
