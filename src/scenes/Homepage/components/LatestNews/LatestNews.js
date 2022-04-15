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

  const blogMediumQueryData = useStaticQuery(
    graphql`
      query {
        allMediumPost (limit: 3, sort: { fields: createdAt, order: DESC }) {
          edges {
            node {
              id
              title
              uniqueSlug
              createdAt(formatString: "DD MMM YYYY")
              virtuals {
                subtitle
                readingTime
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
    `
  )

  const blogs = blogMediumQueryData.allMediumPost.edges

  return (
    <div id="news" className={styles.newsWrap}>
      <div className={classNames("container", styles.newsContainer)}>
        <div className={styles.titleWrap}>
          <h2>{content.TITLE}</h2>
          <p>{content.DESCRIPTION}</p>
        </div>
        <div className={styles.postsWrap}>
          {blogs.map(({node}, idx) => {
            return (
              <a
                href={`https://medium.com/@keyring/${node.uniqueSlug}`}
                className={styles.post}
                target="_blank"
                key={node.title}
              >
                <div className={styles.imageWrap}>
                  <img
                    src={`https://miro.medium.com/fit/c/400/400/${node.virtuals?.previewImage?.imageId}`}
                    alt="medium post image"
                    loading="lazy"
                />
                </div>
                <div className={styles.info}>
                  <h4 className={styles.title}>{node.title}</h4>
                  <p className={styles.text}>{node.virtuals.subtitle}</p>
                  <p className={styles.author}>{node.author.name}</p>
                  <p className={styles.date}>
                    {node.createdAt} • {Math.ceil(node.virtuals.readingTime)} min to read
                  </p>
                  <img src={medium} className={styles.mediumIcon} alt="medum post" loading="lazy" />
                </div>
              </a>
            )
          })}
        </div>
        <a
          url="https://medium.com/@keyring"
          className={classNames("btn_whiteBorder", styles.newsBtn)}
          title={content.BTN_TEXT}
          rel="noreferrer"
          target="_blank"
        >
          {content.BTN_TEXT}
        </a>
        <img src={decor1} className={styles.decorEllipse} alt="diagram" loading="lazy" />
        <img src={decor2} className={styles.decorQuestion} alt="diagram" loading="lazy" />
      </div>
    </div>
  )
}

export default LatestNews
