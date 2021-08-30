import { useStaticQuery } from "gatsby";
import { graphql } from "gatsby";
import { ImageDataLike } from "gatsby-plugin-image";

interface YamlType {
  nick: string,
  avatar: ImageDataLike
}

interface AllYamlType {
  allDataYaml: {
    edges: {
      node: YamlType
    }[]
  }
}

function getAllYaml() {
  const data = useStaticQuery<AllYamlType>(graphql`
    query allYaml {
      allDataYaml {
        edges {
          node {
            nick
            avatar {
              childImageSharp {
                gatsbyImageData(width: 32)
              }
            }
          }
        }
      }
    }
  `);
  return data;
}

export function getAvatarOf(nick: string): ImageDataLike  {
  const data = getAllYaml()
  const ymlEdges = data.allDataYaml.edges;

  let avatar;
  for (const edge of ymlEdges){
    if (edge.node.nick === nick) {
      avatar = edge.node.avatar;
    }
  }
  if (avatar === undefined) {
    avatar = ymlEdges[0].node.avatar;
  }
  
  return avatar
}