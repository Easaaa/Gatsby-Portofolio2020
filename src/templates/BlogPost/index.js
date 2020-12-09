import React from 'react';
import { Link, graphql } from 'gatsby';

import { BlogPostContainer, HeaderImg, SubscribeSection } from './style';

import Layout from '../../components/Layout';
import SEO from '../../components/seo';
import BlogPostHeader from '../../components/BlogPostHeader';
import Contact from '../../components/Contact';
import BlogSubscribeButton from '../../components/BlogSubscribeButton';

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark;
  const siteTitle = data.site.siteMetadata.title;
  const { previous, next } = pageContext;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <BlogPostHeader
        title={post.frontmatter.title}
        date={post.frontmatter.date}
      />
      <BlogPostContainer>
        <HeaderImg
          fluid={post.frontmatter.image?.childImageSharp.fluid}
          alt=""
        />
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
      </BlogPostContainer>
      <SubscribeSection>
        <h3>Don't forget...</h3>
        <h4>
          You can follow me on Twitter, sometimes I write something meaningful.
        </h4>
        <p>Thanks for reading.</p>
      </SubscribeSection>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;