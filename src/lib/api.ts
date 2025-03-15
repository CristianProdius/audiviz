import client from "./apollo";
import { gql } from "@apollo/client";

// Function to fetch hero section content
export async function getHeroContent() {
  const { data } = await client.query({
    query: gql`
      query GetHeroContent {
        page(id: "home", idType: URI) {
          title
          content
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
          acfHeroFields {
            heroHeading
            heroSubheading
            heroButtonText
            heroButtonLink
            heroSmileIcon {
              node {
                sourceUrl
                altText
              }
            }
            herobasketballicon {
              node {
                sourceUrl
                altText
              }
            }
            imagineaCuCopil {
              node {
                sourceUrl
                altText
              }
            }
          }
        }
      }
    `,
  });

  return data.page;
}

// Function to fetch all posts
export async function getAllPosts() {
  const { data } = await client.query({
    query: gql`
      query GetAllPosts {
        posts(first: 20) {
          nodes {
            id
            title
            excerpt
            slug
            date
            featuredImage {
              node {
                sourceUrl
                altText
              }
            }
          }
        }
      }
    `,
  });

  return data.posts.nodes;
}

// Function to fetch a single post by slug
export async function getPostBySlug(slug: any) {
  const { data } = await client.query({
    query: gql`
      query GetPost($slug: ID!) {
        post(id: $slug, idType: SLUG) {
          id
          title
          content
          date
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
        }
      }
    `,
    variables: {
      slug: slug,
    },
  });

  return data.post;
}
