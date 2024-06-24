import { Parent } from 'unist'
//@ts-ignore
import { VFile } from 'vfile'
import { visit } from 'unist-util-visit'
//@ts-ignore
import { load } from 'js-yaml'

export default function extractFrontmatter() {
  return (tree: Parent, file: VFile) => {
    visit(tree, 'yaml', (node: Parent) => {
      //@ts-ignore
      file.data.frontmatter = load(node.value)
    })
  }
}
