import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: "http://localhost:3001/graphql",
  documents: "src/graphql/*.graphql",
  generates: {
    'src/generated/index.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
      config: { withHooks: true }
    }
  }
}

export default config