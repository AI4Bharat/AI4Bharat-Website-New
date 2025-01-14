

# Tina Starter 🦙

This Next.js starter is powered by [TinaCMS](https://app.tina.io) for you and your team to visually live edit the structured content of your website. ✨  

The content is managed through Markdown and JSON files stored in your GitHub repository, and queried through Tina GraphQL API.


### Steps to configure nested routes in Tina

* In the `content` folder, create a subfolder for the nested content and add the mdx files. Here I've named it `bhashaverse/nested_route_demo.mdx`.
  Content folder can have as many mdx files as needed. These filenames will be routed with the generic `[filename].tsx` file mentioned later.
  Ex: If `content/bhashaverse/test.mdx` is created, it will be viewable at 'http://localhost:3000/bhashaverse/test'

* In the `components` folder, create a subfolder for the template pages. Each subfolder should have 3 files.
  Here, they are `bhasha.tsx`, `bhashaverse.tsx` and `index.tsx`, all in the `components/bhashaverse` directory.

* In the `pages` directory, create a template file for the nested page. This is located at `pages/bhashaverse.tsx`.
  Also create a subfolder with the template nested file `[filename].tsx`. Located at `pages/bhashaverse/[filename].tsx`. Make sure the imports in this file point to the right component from the `components/bhashaverse` directory.

* Add a collection to the Tina schema with the necessary fields in `.tina/schema.ts`. Here, the schema is named `bhashaverse`.

* Finally, make sure the GraphQL queries in `.tina/queries/queries.gql` correspond to the schema. Here, I've added query `BhashaverseQuery` and connection `bhashaverseConnection` under the parent `PageQuery`.


Thus, files to add / make changes in:

1. `.tina/schema.ts`
2. `.tina/queries/queries.gql`
3. `components/bhashaverse/bhasha.tsx`
   `components/bhashaverse/bhashaverse.tsx`
   `components/bhashaverse/index.tsx`
4. `content/bhashaverse/nested_route_demo.mdx`
5. `pages/bhashaverse/[filename.tsx]`
   `pages/bhashaverse.tsx`


Note:
As a general rule-of-thumb, do not change anything manually in the .tina/__generated__  files.
Tina automatically generates the graphql schema when the application is running, from the schema you have written in `.tina/schema.ts`.



### Features

- [Tina Headless CMS](https://app.tina.io) for authentication, content modeling, visual editing and team management.
- [Cloudinary](https://cloudinary.com) to manage your media.
- [Vercel](https://vercel.com) deployment to visually edit your site from the `/admin` route.
- Local development workflow from the filesystem with a local GraqhQL server.

## Requirements

- Git, [Node.js Active LTS](https://nodejs.org/en/about/releases/), Yarn installed for local development.
- A [TinaCMS](https://app.tina.io) account for live editing.
- A [Cloudinary](https://cloudinary.com) account for media support.

## Local development

Install the project's dependencies:

```
yarn install
```

Run the project locally:

```
yarn dev
```

### Local URLs

- http://localhost:3000 : browse the website 
- http://localhost:3000/admin : connect to Tina Cloud and go in edit mode
- http://localhost:3000/exit-admin : log out of Tina Cloud
- http://localhost:4001/altair/ : GraphQL playground to test queries and browse the API documentation

### Using Tina Cloud Locally

Replace the `.env.local.example`, with `.env.local` and add in the details from Cloudinary and Tina. 

```
NEXT_PUBLIC_TINA_CLIENT_ID=<get this from the project you create at app.tina.io>

# These are used in conjunction with a Cloudinary account for media asset management
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=<Get this from your Cloudinary account>
NEXT_PUBLIC_CLOUDINARY_API_KEY=<Get this from your Cloudinary account>
CLOUDINARY_API_SECRET=<Get this from your Cloudinary account>
NEXT_PUBLIC_HIDE_EDIT_BUTTON=0 
```

## Getting Help

TinaCMS backend is in public beta, you might face issues, to provide feedback or get help with any challenges you may have:

-   Visit the [documentation](https://tina.io/docs/) to learn about Tina.
-   [Join our Discord](https://discord.gg/zumN63Ybpf) to share feedback.
-   Visit the [community forum](https://community.tinacms.org/) to ask questions.
-   Get support through the chat widget on the TinaCMS Dashboard
-   [Email us](mailto:support@tina.io) to schedule a call with our team and share more about your context and what you're trying to achieve.
-   [Search or open an issue](https://github.com/tinacms/tinacms/issues) if something is not working.
-   Reach out on Twitter at [@tina_cms](https://twitter.com/tina_cms).

## Development tips

### Visual Studio Code GraphQL extension

[Install the GraphQL extension](https://marketplace.visualstudio.com/items?itemName=GraphQL.vscode-graphql) to benefit from type auto-completion.

### Typescript

A good way to ensure your components match the shape of your data is to leverage the auto-generated TypeScript types.
These are rebuilt when your `.tina` config changes.

## LICENSE

Licensed under the [Apache 2.0 license](./LICENSE).




