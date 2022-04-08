import React from "react"
import { StaticQuery, graphql, useStaticQuery } from "gatsby"
import classNames from "classnames/bind"
import Button from "../../../../components/Button"
import * as content from "../../../../constants/content/latestNews"
import * as styles  from "./LatestNews.module.css"
import postImage from "../../../../assets/images/post_image.jpg"
import decor1 from "../../../../assets/images/decor/ellipse.svg"
import decor2 from "../../../../assets/images/decor/question.svg"
import medium from "../../../../assets/images/medium-black.svg"

const LatestNews = () => {
  // const { node: blogpageContent } = data.allMediumPost.edges[0]
  // const { data: pageData } = blogpageContent;
  const blogMediumQueryData = useStaticQuery(
    graphql`
    query {
      allMediumPost(sort: { fields: [createdAt], order: DESC }) {
        edges {
          node {
            id
            title
            uniqueSlug
            createdAt(formatString: "MMM YYYY")
            virtuals {
              previewImage {
                imageId
              }
            }
            author {
              name
            }
          }
        }
      }
    }
  `)

  const blogs = blogMediumQueryData.allMediumPost.edges

  return (
    <div id={"news"} className={styles.newsWrap}>
      <div className={classNames("container", styles.newsContainer)}>
        <div className={styles.titleWrap}>
          <h2>{content.TITLE} <span>{content.TITLE_COLORED}</span></h2>
          <p>{content.DESCRIPTION}</p>
        </div>
        <div className={styles.postsWrap}>
          <div className={styles.post}>
            <div className={styles.imageWrap}>
              <img src={postImage} alt=""/>
            </div>
            <div className={styles.info}>
              <h4 className={styles.title}>How to use Keyring’s extention</h4>
              <p className={styles.text}>I was amazed at how easy it was to use yours extention.</p>
              <p className={styles.author}>Alex Rives</p>
              <p className={styles.date}>March 5, 2022 • 5 min to read</p>
              <img src={medium} className={styles.mediumIcon} alt="medum"/>
            </div>
          </div>
          <div className={styles.post}>
            <div className={styles.imageWrap}>
              <img src={postImage} alt=""/>
            </div>
            <div className={styles.info}>
              <h4 className={styles.title}>How to use Keyring’s extention</h4>
              <p className={styles.text}>I was amazed at how easy it was to use yours extention.</p>
              <p className={styles.author}>Alex Rives</p>
              <p className={styles.date}>March 5, 2022 • 5 min to read</p>
              <img src={medium} className={styles.mediumIcon} alt="medum"/>
            </div>
          </div>
          <div className={styles.post}>
            <div className={styles.imageWrap}>
              <img src={postImage} alt=""/>
            </div>
            <div className={styles.info}>
              <h4 className={styles.title}>How to use Keyring’s extention</h4>
              <p className={styles.text}>I was amazed at how easy it was to use yours extention.</p>
              <p className={styles.author}>Alex Rives</p>
              <p className={styles.date}>March 5, 2022 • 5 min to read</p>
              <img src={medium} className={styles.mediumIcon} alt="medum"/>
            </div>
          </div>
        </div>
        <Button
          url={"https://medium.com"}
          btnStyles={classNames("btn_whiteBorder", styles.newsBtn)}
          title={content.BTN_TEXT}
          target={"_blank"}
        />
        <img src={decor1} className={styles.decorEllipse} alt={"diagram"} />
        <img src={decor2} className={styles.decorQuestion} alt={"diagram"} />
      </div>
    </div>
  )
}

export default LatestNews
