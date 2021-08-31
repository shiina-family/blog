import { useStaticQuery } from "gatsby";
import { graphql } from "gatsby";

interface YamlType {
  nick: string,
  twitter: string
}

interface AllYamlType {
  allDataYaml: {
    edges: {
      node: YamlType
    }[]
  }
}

export function getTwitterOf(nick: string): string {
  const data = useStaticQuery<AllYamlType>(graphql`
    query {
      allDataYaml {
        edges {
          node {
            nick
            twitter
          }
        }
      }
    }
  `);
  const ymlEdges = data.allDataYaml.edges;

  let twitter;
  for (const edge of ymlEdges) {
    if (edge.node.nick === nick) {
      twitter = edge.node.twitter;
    }
  }
  if (twitter === undefined) {
    twitter = "tenzyumasuda"
  }

  return twitter
}