# Contributor Guide

## Information about this project
This is a web application in Next.js 15, Prisma ORM, Once-UI for a menu of a restaurant. 
All the custom components and pages must follow the UI/UX best practices. 

# Once-UI MPC
TITLE: Composing Layouts with Row and Column - TSX
DESCRIPTION: This example illustrates the use of `Row` and `Column` components, which are semantic wrappers around `Flex`, for building complex layouts. It demonstrates nesting `Row` and `Column` elements to achieve a responsive design, with `mobileDirection='column'` on the outer `Row` for mobile adaptability. Props like `fillWidth`, `gap`, and `center` are used for alignment and spacing.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/basics/structure.mdx#_snippet_1

LANGUAGE: tsx
CODE:
```
<Row fillWidth gap="16" mobileDirection="column">
    <Column fillWidth center>
        col
    </Column>
    <Column fill gap="16">
      <Row fill center>
          row
      </Row>
      <Row fill center>
          row
      </Row>
    </Column>
    <Column fillWidth center>
        col
    </Column>
</Row>
```

----------------------------------------

TITLE: Creating a New Once UI App with CLI (Bash)
DESCRIPTION: This command initializes a new Once UI project using the `create-once-ui-app` CLI tool. It automatically clones the latest version of the Once UI starter and installs all necessary dependencies, providing a ready-to-use project setup.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/quick-start.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-once-ui-app@latest my-app
```

----------------------------------------

TITLE: Configuring MCP Server for Once UI Documentation (JSON)
DESCRIPTION: This JSON configuration snippet is used to set up the Context7 MCP server within an IDE's plugin settings. It specifies the command and arguments for `npx` to fetch the latest `@upstash/context7-mcp` package, enabling the IDE to access Once UI documentation for AI agents.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/README.md#_snippet_0

LANGUAGE: JSON
CODE:
```
{
  "mcpServers": {
    "context7": {
      "command": "npx",
      "args": ["-y", "@upstash/context7-mcp@latest"]
    }
  }
}
```

----------------------------------------

TITLE: Cloning the repository
DESCRIPTION: Clones the Magic Portfolio git repository from GitHub to your local machine.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/magic-portfolio/quick-start.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
git clone https://github.com/once-ui-system/magic-portfolio.git
```

----------------------------------------

TITLE: Implementing InfiniteScroll with React TSX
DESCRIPTION: This snippet demonstrates how to integrate the `InfiniteScroll` component in a React application using TypeScript/TSX. It manages a list of items and a loading state, simulating an asynchronous data fetch operation. The `loadMore` callback is responsible for fetching additional data and updating the component's state, returning a boolean to indicate if more items are available. It requires `useState` and `useCallback` from React, and `InfiniteScroll`, `Flex` from `@once-ui/react`.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/infiniteScroll.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
import { useState, useCallback } from "react";
import { InfiniteScroll, Flex } from "@once-ui/react";

function InfiniteScrollExample() {
  const [items, setItems] = useState(Array(5).fill(null).map((_, i) => i));
  const [loading, setLoading] = useState(false);
  
  const loadMore = useCallback(async () => {
    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const lastItem = items[items.length - 1] || 0;
    const newItems = Array(5).fill(null).map((_, i) => lastItem + i + 1);
    
    setItems(prev => [...prev, ...newItems]);
    setLoading(false);
    
    // Return true if there are more items to load
    return items.length < 50;
  }, [items]);
  
  return (
    <InfiniteScroll
      items={items}
      loadMore={loadMore}
      loading={loading}
      threshold={200}
      renderItem={(item) => (
        <Flex key={item}/>
      )}
    />
  );
}
```

----------------------------------------

TITLE: Configuring MCP Server for Context7 (JSON)
DESCRIPTION: This JSON snippet configures the MCP server for Context7 within an IDE's settings, typically in `mcp_config.json`. It defines a 'context7' server that uses `npx` to execute the `@upstash/context7-mcp@latest` package, enabling agents to pull Once UI documentation.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/vibe-coding.mdx#_snippet_0

LANGUAGE: JSON
CODE:
```
{
  "mcpServers": {
    "context7": {
      "command": "npx",
      "args": ["-y", "@upstash/context7-mcp@latest"]
    }
  }
}
```

----------------------------------------

TITLE: Install Dependencies - Bash
DESCRIPTION: Installs the necessary project dependencies listed in the package.json file using npm.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/magic-docs/quick-start.mdx#_snippet_1

LANGUAGE: bash
CODE:
```
npm install
```

----------------------------------------

TITLE: Starting the Development Server (Bash)
DESCRIPTION: Starts the local development server for the Magic Bio project, allowing you to view and test the application during development.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/magic-bio/quick-start.mdx#_snippet_2

LANGUAGE: bash
CODE:
```
npm run dev
```

----------------------------------------

TITLE: Start Development Server - Bash
DESCRIPTION: Starts the local development server for the Magic Docs project, typically enabling live reloading and development features.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/magic-docs/quick-start.mdx#_snippet_2

LANGUAGE: bash
CODE:
```
npm run dev
```

----------------------------------------

TITLE: Implementing Basic Select Component in TSX
DESCRIPTION: This snippet demonstrates a basic implementation of the `Select` component, providing a dropdown menu for choosing from a predefined list of options. It requires an `id` for identification, a `label` for user guidance, and an `options` array containing objects with `label` and `value` properties. This component is suitable for simple selection scenarios without search functionality.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/form-controls/select.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
<Select
    id="basic-select"
    label="Choose a country"
    options={[
      { label: "United States", value: "us" },
      { label: "Canada", value: "ca" },
      { label: "United Kingdom", value: "uk" },
      { label: "Australia", value: "au" }
    ]}
/>
```

----------------------------------------

TITLE: Referencing Centralized Metadata in Next.js Pages (TSX)
DESCRIPTION: This snippet shows how to import and utilize the centralized metadata configuration within a Next.js page's generateMetadata function. By spreading the meta object, pages can inherit default site-wide SEO settings while easily overriding or adding page-specific details like the path.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/modules/meta.mdx#_snippet_2

LANGUAGE: tsx
CODE:
```
import { Meta } from '@/once-ui/modules';
import { meta } from '@/app/resources/seo';

export async function generateMetadata() {
    return Meta.generate({
      ...meta,
      path: "/",
    });
}
```

----------------------------------------

TITLE: Implementing a Searchable Dropdown with DropdownWrapper - TypeScript/React
DESCRIPTION: This snippet demonstrates how to create a custom searchable dropdown menu using React hooks and the `DropdownWrapper` component. It manages dropdown state, selected values, and search queries, dynamically filtering options based on user input. The component requires `DropdownWrapper`, `Button`, `Column`, `Input`, `Icon`, `Option`, `Flex`, and `Text` components.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/dropdownWrapper.mdx#_snippet_2

LANGUAGE: tsx
CODE:
```
const [isOpen, setIsOpen] = useState(false);
const [selected, setSelected] = useState("");
const [searchQuery, setSearchQuery] = useState("");

const options = [
    { label: "Apple", value: "apple", description: "Fruit" },
    { label: "Banana", value: "banana", description: "Fruit" },
    { label: "Carrot", value: "carrot", description: "Vegetable" },
    { label: "Broccoli", value: "broccoli", description: "Vegetable" },
    { label: "Orange", value: "orange", description: "Fruit" }
];

const handleSelect = (value: string) => {
    setSelected(value);
    setIsOpen(false);
};

const filteredOptions = options.filter(option => 
    option.label.toLowerCase().includes(searchQuery.toLowerCase())
);

return (
    <DropdownWrapper
      isOpen={isOpen}
      onOpenChange={setIsOpen}
      minHeight={200}
      trigger={
        <Button 
          variant="secondary" 
          suffixIcon="chevronDown"
          onClick={() => setIsOpen(!isOpen)}
        >
          {selected ? options.find(opt => opt.value === selected)?.label : "Search items"}
        </Button>
      }
      dropdown={
        <Column fillWidth minWidth={12}>
          <Column padding="4" fillWidth position="sticky" top="0" background="page" zIndex={1}>
            <Input
              height="s"
              id="search-dropdown"
              placeholder="Search"
              hasPrefix={<Icon name="search" size="xs" />}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onClick={(e) => e.stopPropagation()}
            />
          </Column>
          <Column fillWidth gap="2" padding="4">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option) => (
                <Option
                  key={option.value}
                  label={option.label}
                  value={option.value}
                  description={option.description}
                  selected={option.value === selected}
                  onClick={handleSelect}
                />
              ))
            ) : (
              <Flex fillWidth center paddingX="16" paddingY="32">
                <Text>No results found</Text>
              </Flex>
            )}
          </Column>
        </Column>
      }
    />
);
```

----------------------------------------

TITLE: Basic Dialog Usage (TSX)
DESCRIPTION: Demonstrates the basic implementation of a Dialog component in TSX, including state management for opening/closing, setting a title and description, and embedding content like input fields and buttons.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/dialog.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
const [isOpen, setIsOpen] = useState(false);

return (
    <>
      <Button onClick={() => setIsOpen(true)}>
        Open Dialog
      </Button>
      <Dialog
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Basic dialog"
        description="This is a simple dialog with a title and description."
      >
        <Column fillWidth gap="16" marginTop="12">
          Dialog content goes here. This area can contain any React components.
          <Row fillWidth vertical="center" gap="8">
            <Input
              id="name"
              label="Enter your name"
            />
            <Button label="Submit" onClick={() => setIsOpen(false)}/>
          </Row>
        </Column>
      </Dialog>
    </>
);
```

----------------------------------------

TITLE: Syncing Once UI Documentation with Local Agent Environment (Shell)
DESCRIPTION: This shell command is executed after configuring the MCP server to synchronize the Once UI documentation with the local AI agent environment. It instructs the agent to retrieve library documentation for the `/once-ui-system/mcp` path, making it available for context-aware code generation.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/README.md#_snippet_1

LANGUAGE: Shell
CODE:
```
get-library-docs /once-ui-system/mcp
```

----------------------------------------

TITLE: Starting Local Development Server (Bash)
DESCRIPTION: This command initiates the local development server for the Once UI application. It typically enables hot-reloading and provides a local URL to view the application during development.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/quick-start.mdx#_snippet_3

LANGUAGE: bash
CODE:
```
npm run dev
```

----------------------------------------

TITLE: Initializing Basic Input Component in TSX
DESCRIPTION: This snippet demonstrates the basic initialization of an `Input` component. It includes a `label` for user guidance and a `hasPrefix` prop to add an `Icon` before the input field, enhancing visual context for email entry.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/form-controls/input.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
<Input
    id="input-1"
    label="Email"
    hasPrefix={
      <Icon marginLeft="4" onBackground="neutral-weak" name="email" size="xs" />
    }
/>
```

----------------------------------------

TITLE: Defining Centralized SEO Metadata Configuration (TSX)
DESCRIPTION: This snippet illustrates how to create a centralized configuration file (seo.js) for site-wide metadata. This approach ensures consistency across multiple pages by defining default values for title, description, base URL, image, and author information, simplifying maintenance for larger sites.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/modules/meta.mdx#_snippet_1

LANGUAGE: tsx
CODE:
```
// default metadata
const meta = {
    title: "Once UI: Build the future",
    description: "An open-source design system for indie creators to ship like teams of 10+ alone.",
    baseURL: "https://once-ui.com",
    type: "website",
    image: "/images/cover.jpg",
    author: {
      name: "Once UI Team",
      url: "https://once-ui.com"
    }
};

export { meta };
```

----------------------------------------

TITLE: Controlled Checkbox State in TSX
DESCRIPTION: Illustrates how to create a controlled `Checkbox` component using React's `useState` hook. The `isChecked` prop and `onToggle` event handler manage the checkbox's state, allowing programmatic updates.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/form-controls/checkbox.mdx#_snippet_1

LANGUAGE: tsx
CODE:
```
const [checked, setChecked] = useState(false);

<Checkbox
    label="Controlled checkbox"
    isChecked={checked}
    onToggle={() => setChecked(!checked)}
/>

// You can also update the state programmatically
const handleReset = () => setChecked(false);
```

----------------------------------------

TITLE: Installing Dependencies (Bash)
DESCRIPTION: Installs the required Node.js dependencies for the Magic Bio project using npm, preparing the project for development.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/magic-bio/quick-start.mdx#_snippet_1

LANGUAGE: bash
CODE:
```
npm install
```

----------------------------------------

TITLE: Example of Style Overrides with Data Attributes in JSX
DESCRIPTION: This JSX code snippet demonstrates how to apply data attributes like `data-theme`, `data-border`, `data-neutral`, etc., to components (`Column`, `Flex`, `Row`, `IconButton`, `Avatar`, `SegmentedControl`, `User`, `Media`, `Text`, `SmartLink`) to override inherited styles. It shows a dark theme container with a nested light theme element and specific border styles, illustrating the concept of style inheritance and overriding.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/config.mdx#_snippet_2

LANGUAGE: jsx
CODE:
```
<Column
    overflow="hidden"
    data-theme="dark"
    background="page"
    border="neutral-medium"
    radius="xl-8"
    padding="8"
    maxWidth={32}
    maxHeight={44}
  >
    <Flex
      fillWidth
      horizontal="center"
      position="absolute"
      bottom="8"
      zIndex={1}
      data-theme="light"
      data-border="rounded"
      padding="8"
    >
      <Row maxWidth={20}
        horizontal="space-between"
        padding="8"
        vertical="center"
        background="neutral-weak"
        border="neutral-medium"
        radius="full">
        <IconButton
          variant="secondary"
          tooltip="Home"
          icon="home"
        />
        <IconButton variant="ghost" tooltip="Notifications" icon="notification" />
        <IconButton variant="ghost" tooltip="Search" icon="search" />
        <Avatar
            src="/images/avatar.jpg"
        />
      </Row>
    </Flex>
    <Column fillHeight padding="m" gap="16" flex={1}>
        <SegmentedControl
          buttons={[
            {
              label: "For you",
              value: "For you",
            },
            {
              label: "Following",
              value: "Following",
            },
            {
              label: "Freelancing",
              value: "Freelancing",
            },
            {
              label: "Self",
              value: "Self",
            },
            {
              label: "Productivity",
              value: "Productivity",
            },
            {
              label: "Mental Health",
              value: "Mental Health",
            },
            {
              label: "Media",
              value: "Media",
            },
          ]}
          defaultSelected="For you"
        />
      <Column paddingX="8" paddingTop="20" paddingBottom="64" gap="48" flex={1}>
        {[{
            name: "Lorant",
            avatar: "/images/avatar.jpg",
            title: "Launch your fully functional ecommerce store in an hour",
            subtitle: "With the power of Fourthwall and flexibility of Once UI.",
            date: "Jun 23",
            likes: 48,
            comments: 2,
            topic: "Productivity",
            topicLink: "",
            imageSrc: "/images/docs/magic-store.jpg"
          },
          {
            name: "Lorant",
            avatar: "/images/avatar.jpg",
            title: "Ship quality product docs without writing code",
            subtitle: "Magic Docs is Once UI's mdx-based documentation template.",
            date: "Jun 16",
            likes: 31,
            comments: 0,
            topic: "Design",
            topicLink: "",
            imageSrc: "/images/docs/magic-docs.jpg"
          },
        ].map((article, index) => (
          <Column key={index} fillWidth gap="12">
            <User
              name={article.name}
              avatarProps={{
                empty: false,
                size: "s",
                src: article.avatar,
              }}
            />
            <Flex fillWidth gap="24" mobileDirection="column">
              <Column gap="12">
                <Text variant="heading-strong-l" onBackground="neutral-strong">
                  {article.title}
                </Text>
                <Text variant="body-default-m" onBackground="neutral-weak">
                  {article.subtitle}
                </Text>
              </Column>
              <Flex minWidth={8} overflow="hidden" radius="m" border="neutral-medium" fitHeight>
                <Media
                  aspectRatio="3 / 2"
                  alt="Image preview for article"
                  sizes="120px"
                  src={article.imageSrc}
                />
              </Flex>
            </Flex>
            <Flex gap="8" paddingTop="8" vertical="center">
              <Icon size="xs" name="HiOutlineDocumentText" />
              <Text variant="body-default-xs" onBackground="neutral-medium">
                Because you follow{" "}
                <SmartLink className="brand-on-background-weak" href={article.topicLink}>
                  {article.topic}
                </SmartLink>
              </Text>
            </Flex>
            <Flex
              vertical="center"
              paddingTop="8"
              textVariant="body-default-s"
              onBackground="neutral-medium"
            >
              <Flex gap="32" fillWidth>
                <Text>{article.date}</Text>

```

----------------------------------------

TITLE: Invoking Context7 for AI Agent Prompts (Shell)
DESCRIPTION: This example demonstrates how to invoke the Context7 MCP server within an AI agent prompt. By appending `use context7` to a prompt, the agent is instructed to leverage the full Once UI system documentation, even if it’s not installed locally, enhancing the quality and relevance of generated code.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/README.md#_snippet_2

LANGUAGE: Shell
CODE:
```
I want you to implement [...]. use context7
```

----------------------------------------

TITLE: Invoking Context7 in AI Prompt (Shell)
DESCRIPTION: This example demonstrates how to invoke the Context7 context within an AI prompt. By appending `use context7` to the prompt, the agent is explicitly instructed to leverage the full Once UI system documentation, even if it's not installed locally, enhancing its ability to generate relevant code.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/vibe-coding.mdx#_snippet_2

LANGUAGE: Shell
CODE:
```
I want you to implement [...]. use context7
```

----------------------------------------

TITLE: Configuring Environment Variables for Magic Store (.env.local)
DESCRIPTION: Sets up the required environment variables in the .env.local file for connecting to Fourthwall and configuring the application.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/magic-store/quick-start.mdx#_snippet_3

LANGUAGE: tsx
CODE:
```
NEXT_PUBLIC_FW_STOREFRONT_TOKEN="<your storefront token>" # Example: ptkn_...
NEXT_PUBLIC_FW_CHECKOUT="<your store url>" # Example: vercel-shop.fourthwall.com. Used for checkout
NEXT_PUBLIC_VERCEL_URL="<the url of your vercel site>" # Example: fw-commerce.vercel.app. This is used for sitemap.xml + robots.txt.

```

----------------------------------------

TITLE: Starting the development server
DESCRIPTION: Starts the local development server for the Magic Portfolio project using the 'dev' script defined in package.json.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/magic-portfolio/quick-start.mdx#_snippet_2

LANGUAGE: bash
CODE:
```
npm run dev
```

----------------------------------------

TITLE: Basic Heading Usage (TSX)
DESCRIPTION: Demonstrates the basic usage of the Heading component with different size variants and semantic HTML tags using the `as` prop.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/heading.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
<Heading variant="heading-strong-xl">
    Heading 1
</Heading>
<Heading variant="heading-strong-l" as="h2">
    Heading 2
</Heading>
<Heading variant="heading-strong-m" as="h3">
    Heading 3
</Heading>
<Heading variant="heading-strong-s" as="h4">
    Heading 4
</Heading>
```

----------------------------------------

TITLE: Referencing Centralized Schema Configuration in TSX Page
DESCRIPTION: This TSX snippet demonstrates how to import and utilize the centralized schema configuration within a page component. It imports the `Schema` component and the `schema` object from the configuration file, then passes the relevant properties to the `Schema` component. This method ensures consistent application of structured data across different pages by referencing a single source.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/modules/schema.mdx#_snippet_2

LANGUAGE: tsx
CODE:
```
import { Schema } from '@/once-ui/modules';
import { schema } from '@/app/resources/seo';

export default function HomePage() {
    return (
      <>
        <Schema
          as="organization"
          title={schema.title}
          description={schema.description}
          baseURL={schema.baseURL}
          path={schema.path}
          image={schema.image}
          author={schema.author}
        />
        {/* Rest of your page component */}
      </>
    );
}
```

----------------------------------------

TITLE: Displaying Error State and Message for Input in TSX
DESCRIPTION: This example shows how to configure the `Input` component to display an error state and a custom error message. The `error` prop activates the error styling, and `errorMessage` provides detailed feedback, optionally including an icon for visual emphasis.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/form-controls/input.mdx#_snippet_1

LANGUAGE: tsx
CODE:
```
<Input
    id="input-1"
    label="Email"
    error
    errorMessage={
      <Row vertical="center" gap="8">
        <Icon name="danger" size="xs" />
        Please enter a valid email address
      </Row>
    }
/>
```

----------------------------------------

TITLE: Implementing Custom Validation for Input in TSX
DESCRIPTION: This snippet demonstrates how to add custom validation to the `Input` component using the `validate` prop. It defines a `validateEmail` function that checks for a valid email format, returning an error message if invalid or `null` if valid. The input's `onChange` handler updates the state, triggering debounced validation.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/form-controls/input.mdx#_snippet_2

LANGUAGE: tsx
CODE:
```
const [value, setValue] = useState("");

const validateEmail = (email: any) => {
    if (!email) return null;
    
    const emailRegex = /^[^s@]+@[^s@]+\.[^s@]+$/;
    if (!emailRegex.test(email)) {
      return "Please enter a valid email address";
    }
    
    return null;
};

<Input
    id="input-1"
    value={value}
    onChange={(e) => setValue(e.target.value)}
    validate={validateEmail}
    placeholder="Email"
/>
```

----------------------------------------

TITLE: Accessing Theme State with useTheme (TSX)
DESCRIPTION: Use the `useTheme` hook within components to access the current theme state (`theme`, `resolvedTheme`) and the function to change the theme (`setTheme`). This example logs the resolved theme whenever it changes.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/themeProvider.mdx#_snippet_1

LANGUAGE: tsx
CODE:
```
const { theme, setTheme, resolvedTheme } = useTheme();

useEffect(() => {
    console.log("Current theme:", resolvedTheme);
}, [resolvedTheme]);
```

----------------------------------------

TITLE: Generating Page Metadata Directly in Next.js (TSX)
DESCRIPTION: This snippet demonstrates how to directly generate SEO-friendly metadata for a Next.js page using the Meta.generate function. It configures essential properties like title, description, base URL, and page path, which are vital for search engine visibility and accurate social media previews.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/modules/meta.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
import { Meta } from "@/once-ui/modules";

export async function generateMetadata() {
    return Meta.generate({
      title: "My Page Title",
      description: "A comprehensive description of the page content",
      baseURL: "https://example.com",
      path: "/docs/getting-started",
      type: "website"
    });
}
```

----------------------------------------

TITLE: Understanding Once UI Project Structure (Bash)
DESCRIPTION: This snippet illustrates the recommended file and directory structure for a Once UI project. It highlights key folders like `app/` for pages, `once-ui/` for design system components and styles, and utility directories, providing an overview of the project's organization.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/quick-start.mdx#_snippet_4

LANGUAGE: bash
CODE:
```
src/
├── app/                  
│   ├── (main)/          
│   │   │   └── page.tsx
│   │   ├── page-2/
│   │   │   └── page.tsx
│   │   ├── layout.tsx
│   │   └── page.tsx     
│   ├── config/          
│   ├── utils/           
│   └── styles/          
│
├── once-ui/             
│   ├── styles/     
│   │   ├── background.scss
│   │   └── ...      
│   │      
│   ├── resources/            
│   │   ├── config.js
│   │   
│   │
│   ├── components/      
│   │   ├── Accordion.tsx
│   │   ├── Accordion.module.scss
│   │   └── ...   
│   │
│   ├── types.ts      
│   ├── icons.ts         
└   └── interfaces.ts  
```

----------------------------------------

TITLE: Installing Project Dependencies (Bash)
DESCRIPTION: After navigating into the newly created or cloned project directory (`my-app`), this command installs all required Node.js dependencies listed in the `package.json` file using npm.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/quick-start.mdx#_snippet_2

LANGUAGE: bash
CODE:
```
cd my-app && npm install
```

----------------------------------------

TITLE: Applying Surface Properties for Adaptive Styling in TSX
DESCRIPTION: This snippet demonstrates how to apply the `surface` background and border properties to a `Row` component. These properties automatically adjust styling based on the current light or dark theme, making them ideal for large layout containers like headers or sidebars. It shows a `Row` containing `Logo` and `Avatar` components, inheriting the theme-adaptive surface styles.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/basics/structure.mdx#_snippet_11

LANGUAGE: tsx
CODE:
```
<Row
    background="surface"
    border="surface">
    <Logo/>
    <Avatar/>
</Row>
```

----------------------------------------

TITLE: Using the Default Spinner (TSX)
DESCRIPTION: Demonstrates the basic usage of the Spinner component to indicate loading states.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/spinner.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
<Spinner />
```

----------------------------------------

TITLE: Defining Once UI Styling Options (TSX)
DESCRIPTION: This snippet shows a configuration object defining various styling options for a Once UI application. It includes settings for theme, neutral and brand colors, border radius style, surface appearance, transitions, and scaling, typically used within the main application configuration file.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/config.mdx#_snippet_1

LANGUAGE: tsx
CODE:
```
theme:       'dark',         // dark | light
neutral:     'gray',         // sand | gray | slate
brand:       'blue',         // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
accent:      'indigo',       // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
solid:       'contrast',     // color | contrast
solidStyle:  'flat',         // flat | plastic
border:      'playful',      // rounded | playful | conservative
surface:     'translucent',  // filled | translucent
transition:  'all',          // all | micro | macro
scaling:     '100',          // 90 | 95 | 100 | 105 | 110
```

----------------------------------------

TITLE: Defining Responsive Grid Columns (TSX)
DESCRIPTION: This snippet illustrates how to define a responsive grid layout using the `Grid` component. It shows the use of the `columns` prop for the default number of columns, and implicitly, `tabletColumns` and `mobileColumns` (as mentioned in the surrounding text) to adjust column counts based on screen size. The `fillWidth` prop ensures child `Row` components occupy available width within their grid cells.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/basics/structure.mdx#_snippet_25

LANGUAGE: tsx
CODE:
```
<Grid fillWidth columns="4"/>\n    <Row fillWidth/>\n    <Row fillWidth/>\n    <Row fillWidth/>\n    <Row fillWidth/>\n    <Row fillWidth/>\n    <Row fillWidth/>\n</Grid>
```

----------------------------------------

TITLE: SSR Hydration Script for Initial Theme (JS)
DESCRIPTION: Inject this script into the `<head>` of your HTML document during server-side rendering (SSR). It reads the saved theme preference from local storage or the system preference and sets the `data-theme` attribute on the `<html>` element before the client-side application hydrates, preventing a flash of incorrect theme.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/themeProvider.mdx#_snippet_2

LANGUAGE: js
CODE:
```
(function() {
      function getInitialTheme() {
        try {
          const saved = localStorage.getItem("theme");
          if (saved === "system") {
            return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
          }
          return saved || "dark";
        } catch (e) {
          return "dark";
        }
      }
      document.documentElement.setAttribute("data-theme", getInitialTheme());
    })();
```

----------------------------------------

TITLE: Mapping MDX Elements to React Components (TSX)
DESCRIPTION: This snippet demonstrates how to configure the mapping between standard MDX elements and custom React components within the `components` object in `src/components/mdx.tsx`. This allows for custom rendering of MDX content, integrating Once UI components like `Table` and `CodeBlock`.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/magic-portfolio/work.mdx#_snippet_1

LANGUAGE: tsx
CODE:
```
const components = {
    p: createParagraph as any,
    h1: createHeading(1) as any,
    h2: createHeading(2) as any,
    h3: createHeading(3) as any,
    h4: createHeading(4) as any,
    h5: createHeading(5) as any,
    h6: createHeading(6) as any,
    img: createImage as any,
    a: CustomLink as any,
    Table,
    CodeBlock,
};
```

----------------------------------------

TITLE: Initializing Basic DatePicker (TSX)
DESCRIPTION: This snippet demonstrates the basic usage of the DatePicker component for selecting a single date. It requires `value` to bind the selected date and `onChange` to handle date changes, updating the state or performing other actions.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/form-controls/datePicker.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
<DatePicker 
    value={selectedDate}
    onChange={handleDateChange}
/>
```

----------------------------------------

TITLE: Applying Spacing Utility Props in TSX
DESCRIPTION: This snippet illustrates the use of various spacing utility props such as `paddingX`, `paddingY`, `gap`, and `marginTop` within `Column` and `Row` components. These props allow for consistent application of internal and external spacing, using either predefined spacing tokens or numerical values converted to `rem`. The example shows nested `Column` and `Row` components with specific dimensions and spacing applied.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/basics/structure.mdx#_snippet_12

LANGUAGE: tsx
CODE:
```
<Column fillWidth>
    <Row fillWidth height="48" radius="m"/>
    <Column fillWidth paddingX="xl" paddingY="24" gap="40" marginTop="40" radius="m">
      <Row fillWidth height="64" radius="m" padding="16"/>
      <Row fillWidth height="64" radius="m" padding="16"/>
    </Column>
</Column>
```

----------------------------------------

TITLE: Wrapping App with ThemeProvider (TSX)
DESCRIPTION: Wrap your application's root component or layout with the `ThemeProvider` to enable theme management and context throughout the app.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/themeProvider.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
<ThemeProvider>
    <App />
</ThemeProvider>
```

----------------------------------------

TITLE: Controlling Semantic HTML Element with Heading (TSX)
DESCRIPTION: Shows how to use the 'as' prop to render the Heading component as different semantic HTML elements (h1 through h5) while maintaining consistent styling defined by the component's variants.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/heading.mdx#_snippet_6

LANGUAGE: tsx
CODE:
```
<Heading as="h1">
    This is an h1 element
</Heading>
<Heading as="h2">
    This is an h2 element
</Heading>
<Heading as="h3">
    This is an h3 element
</Heading>
<Heading as="h4">
    This is an h4 element
</Heading>
<Heading as="h5">
    This is an h5 element
</Heading>
```

----------------------------------------

TITLE: Generating Open Graph Image Metadata (TSX)
DESCRIPTION: This code snippet demonstrates how the `generateMetadata` function in a Next.js page file creates metadata for SEO and social sharing. It specifically shows the generation of the `ogImage` URL using the `baseURL` from `config.js` and the page title from `content.js`, leveraging `next/og` for dynamic image generation.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/magic-portfolio/seo.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
export async function generateMetadata() {
  const title = home.title;
  const description = home.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;
   ...
};
```

----------------------------------------

TITLE: Wrapping App with ToastProvider (TSX)
DESCRIPTION: Wrap your main application component with `ToastProvider` to enable global toast notification functionality throughout your app.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/toastProvider.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
<ToastProvider>\n    <App />\n</ToastProvider>
```

----------------------------------------

TITLE: Stacked Dialogs (TSX)
DESCRIPTION: Illustrates how to stack multiple Dialog components. The example shows a base dialog that can open a second dialog on top, demonstrating the visual stacking effect and state management for multiple dialogs.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/dialog.mdx#_snippet_2

LANGUAGE: tsx
CODE:
```
const [isBaseOpen, setIsBaseOpen] = useState(false);
const [isStackedOpen, setIsStackedOpen] = useState(false);

return (
    <>
      <Button variant="secondary" onClick={() => setIsBaseOpen(true)}>
        Open stacked dialogs
      </Button>
      
      <Dialog
        isOpen={isBaseOpen}
        onClose={() => setIsBaseOpen(false)}
        title="Base dialog"
        base={isStackedOpen}
        footer={
          <Row gap="8">
            <Button variant="secondary" onClick={() => setIsBaseOpen(false)}>
              Close
            </Button>
            <Button onClick={() => setIsStackedOpen(true)}>
              Open stacked dialog
            </Button>
          </Row>
        }
      >
        <Text marginBottom="16">
          This is the base dialog. Click the button below to open a stacked dialog on top.
        </Text>
      </Dialog>
      
      <Dialog
        isOpen={isStackedOpen}
        onClose={() => setIsStackedOpen(false)}
        title="Stacked dialog"
        stack
        footer={
          <Button onClick={() => setIsStackedOpen(false)}>Close stacked dialog</Button>
        }
      >
        <Text>
          This is a stacked dialog that appears on top of the base dialog.
          Notice how the base dialog is dimmed in the background.
        </Text>
      </Dialog>
    </>
);
```

----------------------------------------

TITLE: Configuring Fonts with Next/font (TSX)
DESCRIPTION: This snippet demonstrates how to configure custom fonts using Next.js's `next/font/google` module within the Once UI config file. It imports Geist and Geist Mono, defines font variables, and assigns them to a font configuration object for use throughout the application.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/config.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
import { Geist } from "next/font/google";
import { Geist_Mono } from "next/font/google";

const primaryFont = Geist({
    variable: "--font-primary",
    subsets: ["latin"],
    display: "swap"
});

const monoFont = Geist_Mono({
    variable: "--font-code",
    subsets: ["latin"],
    display: "swap"
});

const font = {
    primary: primaryFont,
    secondary: primaryFont,
    tertiary: primaryFont,
    code: monoFont
}
```

----------------------------------------

TITLE: Default Configuration Settings for Once UI Data Viz Module (TypeScript/JavaScript)
DESCRIPTION: This snippet illustrates the default configuration settings for the Once UI data visualization module, typically found in `src/app/resources/data.config.js`. It defines global properties such as chart `variant` (e.g., 'gradient', 'flat', 'outline'), `mode` (e.g., 'categorical', 'divergent', 'sequential'), default `height`, and styling for `axisLine` and `tick` elements, including `stroke`, `fill`, and `fontSize`.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/data/setup.mdx#_snippet_1

LANGUAGE: tsx
CODE:
```
variant: "gradient", // flat | gradient | outline
mode: "categorical", // categorical | divergent | sequential
height: 24, // default chart height
axisLine: {
    stroke: "var(--neutral-alpha-weak)",
},
tick: {
    fill: "var(--neutral-on-background-weak)",
    fontSize: 11,
},
tickLine: false,
```

----------------------------------------

TITLE: Adding Schema.org Data to a Web Page in TSX
DESCRIPTION: This snippet demonstrates how to integrate Schema.org structured data into a web page using the `Schema` component. It defines essential metadata such as title, description, base URL, path, and author information, which is crucial for SEO and generating rich search results. The `as` prop specifies the type of schema, in this case, a 'webPage'.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/modules/schema.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
<Schema
    as="webPage"
    title="My Page Title"
    description="A comprehensive description of the page content"
    baseURL="https://example.com"
    path="/docs/getting-started"
    author={{
      name: "John Doe",
    }}
/>
```

----------------------------------------

TITLE: Defining Custom PostCSS Breakpoints
DESCRIPTION: These PostCSS custom media queries define global breakpoints used within the Once UI system. The `--s` breakpoint targets screens up to 768px, and the `--m` breakpoint targets screens up to 1024px. These definitions, typically found in `styles/breakpoints.scss`, allow for consistent responsive design across the application.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/basics/spacing.mdx#_snippet_2

LANGUAGE: PostCSS
CODE:
```
@custom-media --s (max-width: 768px);
```

LANGUAGE: PostCSS
CODE:
```
@custom-media --m (max-width: 1024px);
```

----------------------------------------

TITLE: Clone Magic Docs Repository - Bash
DESCRIPTION: Clones the Magic Docs GitHub repository to your local machine using the git command-line tool.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/magic-docs/quick-start.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
git clone https://github.com/once-ui-system/magic-docs.git
```

----------------------------------------

TITLE: Adding Accessibility Attributes to NavIcon React TSX
DESCRIPTION: This snippet highlights the importance of accessibility by showing how to include ARIA attributes like aria-label, aria-expanded, and aria-controls on the NavIcon component. These attributes improve the experience for users of assistive technologies by providing context about the icon's purpose and state.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/navIcon.mdx#_snippet_3

LANGUAGE: tsx
CODE:
```
<NavIcon 
    isActive={isMenuOpen} 
    onClick={toggleMenu}
    aria-label="Toggle navigation menu"
    aria-expanded={isMenuOpen}
    aria-controls="mobile-nav"
/>
```

----------------------------------------

TITLE: Rendering Product Cards with Once UI Components in JavaScript
DESCRIPTION: This snippet demonstrates how to dynamically render a grid of product cards using Once UI components like Grid, Card, Row, Avatar, Text, Media, and Column. It maps over an array of template data to create interactive cards with titles, descriptions, images, and links, showcasing a common pattern for displaying product listings or portfolio items.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/get-started.mdx#_snippet_0

LANGUAGE: JavaScript
CODE:
```
{[
  {
    title: "Once UI Core",
    description: "The design system that powers all our products.",
    image: "/images/docs/once-ui.jpg",
    href: "/once-ui/quick-start"
  },
  {
    title: "Magic Portfolio",
    description: "Showcase your work with our beautiful portfolio template.",
    image: "/images/docs/magic-portfolio.jpg",
    href: "/magic-portfolio/quick-start"
  },
  {
    title: "Magic Docs",
    description: "Create beautiful documentations like this one.",
    image: "/images/docs/magic-docs.jpg",
    href: "/magic-docs/quick-start"
  },
  {
    title: "Magic Store",
    description: "Start selling merch with a ready-made store.",
    image: "/images/docs/magic-store.jpg",
    href: "/magic-store/quick-start"
  },
  {
    title: "Magic Bio",
    description: "A modern link-in-bio solution for creators.",
    image: "/images/docs/magic-bio.jpg",
    href: "/magic-bio/quick-start"
  }
].map((template, index) => (
  <Card
    key={index}
    href={template.href}
    fillWidth
    radius="l"
    border="neutral-alpha-medium"
    direction="column"
  >
    <Row paddingX="20" paddingY="12" gap="12" vertical="center">
    <Avatar style={{background: "black"}} src="/trademark/icon-dark.svg" size="s" />
    <Text variant="label-default-s">Once UI</Text>
    </Row>
    <Media
      border="neutral-alpha-medium"
      src={template.image} 
      aspectRatio="16/9" 
      radius="l" 
      sizes="400px" 
    />
    <Column fillWidth padding="20" gap="4" horizontal="start">
      <Text 
        variant="heading-default-xs" 
        onBackground="neutral-strong"
      >
        {template.title}
      </Text>
      <Text 
        variant="body-default-s" 
        onBackground="neutral-weak"
        wrap="balance"
      >
        {template.description}
      </Text>
    </Column>
  </Card>
))}
```

----------------------------------------

TITLE: Implementing Flex Layout with Row and Column (TSX)
DESCRIPTION: This snippet demonstrates how to use the `Row` and `Column` components from the Flex system to create a responsive horizontal layout that stacks vertically on mobile. It showcases nested `Row` and `Column` elements with styling properties like `fillWidth`, `gap`, `border`, `padding`, and `radius`.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/magic-docs/components.mdx#_snippet_8

LANGUAGE: tsx
CODE:
```
<Row
    fillWidth
    mobileDirection="column"
    gap="16"
  >
    <Column fillWidth border="neutral-alpha-medium" padding="16" radius="m">
      <Row padding="8">Row Item</Row>
      <Row padding="8">Row Item</Row>
    </Column>
    <Column fillWidth border="neutral-alpha-medium" padding="16" radius="m">
      <Row padding="8">Row Item</Row>
      <Row padding="8">Row Item</Row>
    </Column>
    <Column fillWidth border="neutral-alpha-medium" padding="16" radius="m">
      <Row padding="8">Row Item</Row>
      <Row padding="8">Row Item</Row>
    </Column>
    <Column fillWidth border="neutral-alpha-medium" padding="16" radius="m">
      <Row padding="8">Row Item</Row>
      <Row padding="8">Row Item</Row>
    </Column>
</Row>
```

----------------------------------------

TITLE: Creating Flexible Layouts with Flex Prop in TSX
DESCRIPTION: This snippet illustrates the use of the `flex` prop to create asymmetric space distributions, similar to a bento grid layout. It applies `flex` values (e.g., "2", "3") to `Row` components within a `Column` to define their proportional sizing, demonstrating how to achieve responsive designs with `mobileDirection="column"`.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/basics/structure.mdx#_snippet_5

LANGUAGE: tsx
CODE:
```
<Column fillWidth gap="16">
    <Row fillWidth gap="16" mobileDirection="column">
      <Row flex="2" height={8}/>
      <Row flex="3" height={8}/>
    </Row>
    <Row fillWidth gap="16" mobileDirection="column">
      <Row flex="3" height={8}/>
      <Row flex="2" height={8}/>
    </Row>
</Column>
```

----------------------------------------

TITLE: Applying Vertical Margin (Small) - CSS
DESCRIPTION: Applies a small responsive margin to the top and bottom sides of an element. This utility class sets the `margin-top` and `margin-bottom` properties to `var(--responsive-space-s)`, resolving to `40px` (large), `24px` (medium), and `16px` (small).
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/basics/spacing.mdx#_snippet_19

LANGUAGE: CSS
CODE:
```
.my-s
```

----------------------------------------

TITLE: Applying Top Margin (Small) - CSS
DESCRIPTION: Applies a small responsive margin to the top of an element. This utility class sets the `margin-top` property to `var(--responsive-space-s)`, which resolves to `40px` on large screens, `24px` on medium screens, and `16px` on small screens.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/basics/spacing.mdx#_snippet_24

LANGUAGE: CSS
CODE:
```
.mt-s
```

----------------------------------------

TITLE: ElementType Link Behavior (Internal vs. External)
DESCRIPTION: Illustrates how ElementType automatically handles internal paths by rendering a Next.js `<Link>` and external URLs by rendering an `<a>` tag with `target="_blank"`.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/elementType.mdx#_snippet_1

LANGUAGE: tsx
CODE:
```
// External link - renders as <a> with target="_blank"
<ElementType href="https://github.com/once-ui-systems">
    Visit our GitHub repository
</ElementType>

// Internal link - renders as Next.js <Link>
<ElementType href="/components/button">
    View Button
</ElementType>
```

----------------------------------------

TITLE: Implementing Custom Validation for Textarea in TSX
DESCRIPTION: This snippet demonstrates how to add custom validation to the `Textarea` component using the `validate` prop. It defines a `validateContent` function that checks if the input value has at least 20 characters, returning an error message if the condition is not met, or `null` otherwise. The `Textarea` component then uses this function for its validation logic.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/form-controls/textarea.mdx#_snippet_7

LANGUAGE: tsx
CODE:
```
const validateContent = (value) => {
    if (value && value.length < 20) {
        return "Please enter at least 20 characters";
    }
    return null;
};

<Textarea
    id="validation-textarea"
    label="Review"
    placeholder="Write your review"
    validate={validateContent}
/>
```

----------------------------------------

TITLE: Handling File Uploads with MediaUpload (TSX)
DESCRIPTION: This example provides a callback function `onFileUpload` to handle uploaded files, demonstrating how to integrate server-side upload logic and manage potential errors. It assumes an external `uploadToServer` function for the actual upload.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/modules/mediaUpload.mdx#_snippet_5

LANGUAGE: tsx
CODE:
```
const handleFileUpload = async (file: File) => {
    try {
      // Upload file to your server or storage service
      const response = await uploadToServer(file);
      console.log('File uploaded successfully:', response);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
};

<MediaUpload
    onFileUpload={handleFileUpload}
/>
```

----------------------------------------

TITLE: Removable Chips with Toast Notifications - TSX
DESCRIPTION: Demonstrates how to implement removable `Chip` components that trigger a toast notification upon removal. It uses `useState` to manage a list of chips and `useToast` to display feedback when a chip is dismissed, showcasing dynamic list manipulation and user feedback.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/form-controls/chip.mdx#_snippet_3

LANGUAGE: tsx
CODE:
```
const { addToast } = useToast();
const [chips, setChips] = useState([
    { id: "1", label: "React", icon: "code" },
    { id: "2", label: "TypeScript", icon: "code" },
    { id: "3", label: "Next.js" }
]);

const handleRemove = (id) => {
    const chipToRemove = chips.find(chip => chip.id === id);
    setChips(chips.filter(chip => chip.id !== id));
    
    addToast({
      variant: "danger",
      message: "Removed " + chipToRemove.label + " chip"
    });
};

<Row gap="8" wrap>
    {chips.map(chip => (
      <Chip
        key={chip.id}
        label={chip.label}
        prefixIcon={chip.icon}
        onRemove={() => handleRemove(chip.id)}
      />
    ))}
</Row>
```

----------------------------------------

TITLE: Managing Textarea State with React (TSX)
DESCRIPTION: This snippet illustrates how to manage the input value of a `Textarea` component using React's `useState` hook. It includes a `handleChange` function to update the state on user input, ensuring the component is controlled and its value can be programmatically accessed and modified.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/form-controls/textarea.mdx#_snippet_6

LANGUAGE: tsx
CODE:
```
const [value, setValue] = useState('');

const handleChange = (e) => {
    setValue(e.target.value);
};

<Textarea
    id="state-textarea"
    label="Message"
    value={value}
    onChange={handleChange}
    placeholder="Type your message"
/>
```

----------------------------------------

TITLE: Distributing UI Components with Space Alignment in TSX
DESCRIPTION: This snippet illustrates the use of `space-between` and `space-around` values for `Column` alignment props. It shows how to distribute items horizontally with `space-between` and both horizontally and vertically with `horizontal="center"` and `vertical="space-around"`, useful for creating balanced layouts.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/basics/structure.mdx#_snippet_3

LANGUAGE: tsx
CODE:
```
<Column fillWidth horizontal="space-between">
    <IconButton icon="chevronLeft"/>
    <Button>Continue</Button>
</Column>
<Column fillWidth horizontal="center" vertical="space-around">
    <IconButton icon="chevronLeft"/>
    <Button>Continue</Button>
</Column>
```

----------------------------------------

TITLE: Defining Centralized Schema Configuration in JavaScript
DESCRIPTION: This JavaScript snippet illustrates how to create a centralized configuration file for site-wide metadata and Schema.org data. It defines default `meta` properties like title and description, and a `schema` object containing structured data such as base URL, image, and author details. This approach promotes consistency and simplifies updates across a large website.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/modules/schema.mdx#_snippet_1

LANGUAGE: javascript
CODE:
```
// default metadata
const meta = {
    title: "Once UI: Build the future",
    description: "An open-source design system for indie creators to ship like teams of 10+ alone.",
};

// default schema data
const schema = {
    title: "Once UI",
    description: meta.description,
    baseURL: "https://once-ui.com",
    path: "/",
    image: "/images/cover.jpg",
    author: {
      name: "Once UI Team",
      url: "https://once-ui.com"
    }
};

export { schema };
```

----------------------------------------

TITLE: Control Selected SegmentedControl State TSX
DESCRIPTION: This snippet demonstrates how to manage the selected state of the SegmentedControl externally using the selected prop. It sets the "month" option as the currently selected value, enabling controlled component behavior. The onToggle prop is still used to react to user interactions.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/segmentedControl.mdx#_snippet_2

LANGUAGE: tsx
CODE:
```
<SegmentedControl
  fillWidth={false}
  selected="month"
  buttons={[
    { value: "day", label: "Day" },
    { value: "week", label: "Week" },
    { value: "month", label: "Month" },
  ]}
  onToggle={(value) => console.log(value)}
/>
```

----------------------------------------

TITLE: Defining Icon Library with react-icons in TSX
DESCRIPTION: This snippet demonstrates how to create a centralized icon library object in TypeScript using components imported from `react-icons`. It maps string keys to specific icon components, facilitating easy management and replacement of icons across the application. It also defines utility types for the library structure.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/icons.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
import { IconType } from 'react-icons';

import {
    HiChevronDown,
    HiChevronRight,
    HiChevronLeft,
    HiOutlineArrowPath,
    HiCheck,
    ...
} from "react-icons/hi2";

export const iconLibrary: Record<string, IconType> = {
    chevronDown: HiChevronDown,
    chevronRight: HiChevronRight,
    chevronLeft: HiChevronLeft,
    refresh: HiOutlineArrowPath,
    check: HiCheck,
    ...
};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;
```

----------------------------------------

TITLE: Initializing DateRangeInput - Basic Usage - TSX
DESCRIPTION: This snippet demonstrates the basic usage of the `DateRangeInput` component in TSX. It illustrates how to configure the component with an `id`, custom `startLabel` and `endLabel`, and connect its `value` and `onChange` properties to state management (e.g., `dateRange` and `handleDateRangeChange`). This setup enables users to select a date range through dual input fields and an integrated calendar interface.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/form-controls/dateRangeInput.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
<DateRangeInput
    id="basic-date-range-example"
    startLabel="Start date"
    endLabel="End date"
    value={dateRange}
    onChange={handleDateRangeChange}
/>
```

----------------------------------------

TITLE: Configuring BarChart Component with Data and Styles (TSX)
DESCRIPTION: This snippet demonstrates how to configure a BarChart component in TSX, including visual styling properties like `marginTop`, `marginBottom`, `border`, `background`, and `radius`. It also shows how to define chart metadata such as `title` and `description`, and how to structure the `series` and `data` props for rendering time-series data with custom labels.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/data/setup.mdx#_snippet_18

LANGUAGE: tsx
CODE:
```
<BarChart
    marginTop="16"
    marginBottom="24"
    border="brand-medium"
    background="brand-medium"
    radius="xs"
    title="The TikTok Takeover"
    description="Avg. daily time spent per user on TikTok (minutes)"
    barWidth="xl"
    legend={{
      display: false
    }}
    series={{
      key: "Minutes",
      color: "contrast"
    }}
    data={[
      { date: "2020-01-01", Minutes: 20, label: "2020" },
      { date: "2021-01-01", Minutes: 40, label: "2021" },
      { date: "2022-01-01", Minutes: 65, label: "2022" },
      { date: "2023-01-01", Minutes: 85, label: "2023" },
      { date: "2024-01-01", Minutes: 95, label: "2024" },
      { date: "2025-01-01", Minutes: 180, label: "2025 (proj.)" }
    ]}
/>
```

----------------------------------------

TITLE: Displaying UI Elements with Flex and Icons (TSX)
DESCRIPTION: Demonstrates using Flex containers to arrange Icon and Text components for displaying data like likes and comments, and using IconButton components for actions like saving and more options.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/config.mdx#_snippet_3

LANGUAGE: tsx
CODE:
```
<Flex vertical="center" gap="8">
  <Icon size="s" name="like" />
  <Text>{article.likes}</Text>
</Flex>
<Flex vertical="center" gap="8">
  <Icon size="s" name="chat" />
  <Text>{article.comments}</Text>
</Flex>
</Flex>
<Flex gap="12">
<IconButton
  size="s"
  variant="ghost"
  icon="HiOutlineBookmark"
  tooltip="Save"
  tooltipPosition="top"
/>
<IconButton
  size="s"
  variant="ghost"
  icon="HiMiniEllipsisVertical"
  tooltip="more"
  tooltipPosition="top"
/>
</Flex>
```

----------------------------------------

TITLE: Basic Usage of DateRangePicker in TSX
DESCRIPTION: This snippet demonstrates the basic integration of the `DateRangePicker` component. It shows how to bind a `dateRange` state variable to the `value` prop and handle changes using the `onChange` prop, which updates the selected date range.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/form-controls/dateRangePicker.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
<DateRangePicker\n    value={dateRange}\n    onChange={handleRangeChange}\n/>
```

----------------------------------------

TITLE: Controlling RadioButton State with `isChecked` (TSX)
DESCRIPTION: Illustrates how to manage the state of a group of `RadioButton` components externally using React's `useState` hook and the `isChecked` prop. The `onToggle` handler updates the `selectedPlan` state, ensuring mutual exclusivity within the group.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/form-controls/radioButton.mdx#_snippet_1

LANGUAGE: tsx
CODE:
```
const [selectedPlan, setSelectedPlan] = useState<string>("monthly");

const handleToggle = (value: string) => {
    setSelectedPlan(value);
};

<Column gap="16">
    <RadioButton
      name="subscription"
      value="monthly"
      label="Monthly subscription"
      description="Billed monthly at $9.99"
      isChecked={selectedPlan === "monthly"}
      onToggle={() => handleToggle("monthly")}
    />
    <RadioButton
      name="subscription"
      value="annual"
      label="Annual subscription"
      description="Billed annually at $99.99"
      isChecked={selectedPlan === "annual"}
      onToggle={() => handleToggle("annual")}
    />
    <RadioButton
      name="subscription"
      value="lifetime"
      label="Lifetime access"
      description="One-time payment of $299.99"
      isChecked={selectedPlan === "lifetime"}
      onToggle={() => handleToggle("lifetime")}
    />
</Column>
```

----------------------------------------

TITLE: Rendering Responsive Spacing Examples with JSX
DESCRIPTION: This JSX snippet maps over an array of T-shirt sizes ('xs', 's', 'm', 'l', 'xl') to render `Background` components, visually representing responsive spacing tokens. Each `Background` component's height is dynamically set using a CSS variable `var(--responsive-space-${size})`, demonstrating how responsive spaces are applied and rescale at different breakpoints. An `InlineCode` component displays the corresponding T-shirt size.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/basics/spacing.mdx#_snippet_1

LANGUAGE: JSX
CODE:
```
{['xs', 's', 'm', 'l', 'xl'].map((size) => (
  <Background
    key={size}
    radius="s"
    overflow="visible"
    lines={{display: true, angle: -45, color: "neutral-alpha-weak", size: "8", thickness: 1}}
    background="neutral-alpha-weak"
    border="neutral-alpha-medium"
    center
    fillWidth
    style={{ 
      height: `var(--responsive-space-${size})`,
    }}
  >
    <InlineCode position="absolute" style={{ top: '-2rem' }}>{size}</InlineCode>
  </Background>
))}
```

----------------------------------------

TITLE: Rendering Basic Text Variants TSX
DESCRIPTION: Demonstrates basic usage of the Text component showing different ways to apply text styles using `variant`, `size`, and `weight` props.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/text.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
<Text variant="body-default-m">
  This is default body text.
</Text>
<Text variant="label-strong-s">
  This is a strong label.
</Text>
<Text size="s" weight="strong">
  This is small, strong text.
</Text>
```

----------------------------------------

TITLE: Triggering a Basic Toast (TSX)
DESCRIPTION: Use the `useToast` hook to access the `addToast` function and display a simple toast notification with a message and variant.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/toastProvider.mdx#_snippet_1

LANGUAGE: tsx
CODE:
```
const { addToast } = useToast();\n\naddToast({\n    variant: "success",\n    message: "Saved successfully!",\n});
```

----------------------------------------

TITLE: Displaying a Line Chart with Custom Data and Styling in JSX
DESCRIPTION: This snippet demonstrates how to render a `LineChart` component with specific data and styling. It configures chart margins, variant, axis, curve type, title, description, legend display, date formatting, and defines two data series with their respective keys and colors. The `data` array provides historical values for glacier area and temperature anomaly.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/data/lineChart.mdx#_snippet_0

LANGUAGE: JavaScript
CODE:
```
<LineChart\n  marginTop="16"\n  marginBottom="24"\n  variant="outline"\n  axis="x"\n  curve="step"\n  title="Dachstein Glacier Retreat vs. Global Warming"\n  description="Surface area of the Dachstein glacier and global temperature anomaly over time"\n  legend={{\n    display: false,\n  }}\n  date={{\n    start: new Date("1500-01-01"),\n    end: new Date("2030-01-01"),\n    format: "yyyy"\n  }}\n  series={[\n    { key: "Area (km²)", color: "contrast" },\n    { key: "Temp Anomaly (°C)", color: "red" }\n  ]}\n  data={[\n    { date: "1600-01-01", "Area (km²)": 5.6, "Temp Anomaly (°C)": -0.3 },\n    { date: "1625-01-01", "Area (km²)": 5.575, "Temp Anomaly (°C)": -0.4 },\n    { date: "1650-01-01", "Area (km²)": 5.55, "Temp Anomaly (°C)": -0.3 },\n    { date: "1675-01-01", "Area (km²)": 5.525, "Temp Anomaly (°C)": -0.2 },\n    { date: "1700-01-01", "Area (km²)": 5.5, "Temp Anomaly (°C)": -0.4 },\n    { date: "1725-01-01", "Area (km²)": 5.475, "Temp Anomaly (°C)": -0.3 },\n    { date: "1750-01-01", "Area (km²)": 5.45, "Temp Anomaly (°C)": -0.2 },\n    { date: "1775-01-01", "Area (km²)": 5.425, "Temp Anomaly (°C)": -0.1 },\n    { date: "1800-01-01", "Area (km²)": 5.4, "Temp Anomaly (°C)": 0.0 },\n    { date: "1825-01-01", "Area (km²)": 5.375, "Temp Anomaly (°C)": 0.1 },\n    { date: "1850-01-01", "Area (km²)": 5.3, "Temp Anomaly (°C)": 0.2 },\n    { date: "1875-01-01", "Area (km²)": 5.1, "Temp Anomaly (°C)": 0.3 },\n    { date: "1900-01-01", "Area (km²)": 4.9, "Temp Anomaly (°C)": 0.4 },\n    { date: "1925-01-01", "Area (km²)": 4.6, "Temp Anomaly (°C)": 0.5 },\n    { date: "1950-01-01", "Area (km²)": 4.2, "Temp Anomaly (°C)": 0.6 },\n    { date: "1975-01-01", "Area (km²)": 3.4, "Temp Anomaly (°C)": 0.9 },\n    { date: "2000-01-01", "Area (km²)": 2.3, "Temp Anomaly (°C)": 1.1 },\n    { date: "2025-01-01", "Area (km²)": 1.2, "Temp Anomaly (°C)": 1.4 }\n  ]}\n/>
```

----------------------------------------

TITLE: Structuring Layout with Column and Row Components (TSX)
DESCRIPTION: Illustrates the use of Column and Row components for creating nested layouts, applying data attributes for theming and borders, and rendering child components.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/config.mdx#_snippet_4

LANGUAGE: tsx
CODE:
```
<Column
    data-theme="dark"
    data-border="playful">
    <Row
        data-theme="light"
        data-border="rounded">
        {children}
    </Row>
    <Row>
        {children}
    </Row>
</Column>
```

----------------------------------------

TITLE: Defining MegaMenu Component Data Types
DESCRIPTION: These TypeScript interfaces define the data structures required for the `MegaMenu` component's `menuGroups` prop. `MenuGroup` represents top-level menu items, `MenuSection` organizes links within a group, and `MenuLink` defines individual navigation items with labels, hrefs, icons, and descriptions.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/modules/megaMenu.mdx#_snippet_2

LANGUAGE: ts
CODE:
```
interface MenuGroup {
  id: string;
  label: ReactNode;
  suffixIcon?: string;
  href?: string;
  selected?: boolean;
  sections?: MenuSection[];
}

interface MenuSection {
  title?: ReactNode;
  links: MenuLink[];
}

interface MenuLink {
  label: ReactNode;
  href: string;
  icon?: string;
  description?: ReactNode;
  selected?: boolean;
}
```

----------------------------------------

TITLE: Defining Padding Top Utility Classes in JavaScript
DESCRIPTION: This snippet defines utility classes for applying padding to the top of an element. Each class (e.g., ".pt-16") is mapped to a specific design system space variable and its rem or px equivalent, enabling consistent top spacing within the UI framework.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/basics/spacing.mdx#_snippet_47

LANGUAGE: JavaScript
CODE:
```
[".pt-0", "var(--static-space-0)", "0"],
[".pt-1", "var(--static-space-1)", "1px"],
[".pt-2", "var(--static-space-2)", "0.125rem"],
[".pt-4", "var(--static-space-4)", "0.25rem"],
[".pt-8", "var(--static-space-8)", "0.5rem"],
[".pt-12", "var(--static-space-12)", "0.75rem"],
[".pt-16", "var(--static-space-16)", "1rem"],
[".pt-20", "var(--static-space-20)", "1.25rem"],
[".pt-24", "var(--static-space-24)", "1.5rem"],
[".pt-32", "var(--static-space-32)", "2rem"],
[".pt-40", "var(--static-space-40)", "2.5rem"],
[".pt-48", "var(--static-space-48)", "3rem"],
[".pt-56", "var(--static-space-56)", "3.5rem"],
[".pt-64", "var(--static-space-64)", "4rem"],
[".pt-80", "var(--static-space-80)", "5rem"],
[".pt-104", "var(--static-space-104)", "6.5rem"],
[".pt-128", "var(--static-space-128)", "8rem"],
[".pt-160", "var(--static-space-160)", "10rem"]
```

----------------------------------------

TITLE: Registering Custom Once UI Components in MDX (TSX)
DESCRIPTION: This snippet shows how to register custom Once UI components like `Media` and `SmartLink` within the `components` object in `src/product/mdx.tsx`. This configuration enables these components to be directly used in `.mdx` files, leveraging dynamic imports for improved application performance.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/magic-docs/components.mdx#_snippet_14

LANGUAGE: tsx
CODE:
```
const components = {
    // Add new components
    p: createParagraph as any,
    h1: createHeading("h1") as any,
    ...
    Media: dynamic(() => import("@/once-ui/components").then(mod => mod.Media)),
    SmartLink: dynamic(() => import("@/once-ui/components").then(mod => mod.SmartLink)),
};
```

----------------------------------------

TITLE: Overriding Layout Direction with Row (TSX)
DESCRIPTION: This snippet demonstrates how to use the `mobileDirection` prop on a `Row` component to change its layout flow to a column on mobile devices. This ensures content stacks vertically on smaller screens, providing a responsive design. The `fillWidth` and `height` props are used for visual representation of child elements within the `Row`.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/basics/structure.mdx#_snippet_24

LANGUAGE: tsx
CODE:
```
<Row mobileDirection="column">\n    <Row fillWidth height={6}/>\n    <Row fillWidth height={6}/>\n    <Row fillWidth height={6}/>\n    <Row fillWidth height={6}/>\n</Row>
```

----------------------------------------

TITLE: Applying Text Styles with textVariant, align, and onBackground in TSX
DESCRIPTION: This snippet illustrates the usage of `textVariant` to apply predefined text styles, `align` for text alignment, and `onBackground` to set text color based on the background. It shows various text variants like display, heading, body, code, and label, demonstrating how to customize text appearance within `Row` components.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/basics/structure.mdx#_snippet_23

LANGUAGE: tsx
CODE:
```
<Row textVariant="display-strong-xs">
    Display text
</Row>
<Row textVariant="heading-strong-l">
    Heading text
</Row>
<Row textVariant="body-default-m" onBackground="neutral-weak">
    Body text
</Row>
<Row textVariant="code-default-m" onBackground="success-weak">
    Code text
</Row>
<Row textVariant="label-default-s" onBackground="brand-weak">
    Label text
</Row>
```

----------------------------------------

TITLE: Adding Prefix and Suffix Elements to Input in TSX
DESCRIPTION: This example illustrates how to enhance the `Input` component with `hasPrefix` and `hasSuffix` props. It adds a search icon as a prefix and a conditional clear button as a suffix, which appears only when there's input value, providing interactive functionality for search fields.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/form-controls/input.mdx#_snippet_3

LANGUAGE: tsx
CODE:
```
const [searchValue, setSearchValue] = useState<string>("");

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
};

const handleClear = () => {
    setSearchValue("");
};

<Input
    id="input-1"
    label="Search"
    value={searchValue}
    onChange={handleChange}
    hasPrefix={<Icon name="search" size="xs" />}
    hasSuffix={
      searchValue.length > 0 ? (
        <IconButton 
          variant="ghost" 
          icon="close" 
          size="s" 
          onClick={handleClear}
          aria-label="Clear search"
        />
      ) : null
    }
/>
```

----------------------------------------

TITLE: Conditional Rendering with Theme (TSX)
DESCRIPTION: This snippet illustrates the use of `dark` and `light` props on a `Media` component to conditionally render content based on the active UI theme. This allows for displaying different assets or components depending on whether the dark or light theme is enabled.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/basics/structure.mdx#_snippet_20

LANGUAGE: tsx
CODE:
```
<Media dark src="/image-dark.jpg"/>
<Media light src="/image-light.jpg"/>
```

----------------------------------------

TITLE: Configuring Personal Details in TSX
DESCRIPTION: Defines the `person` object containing personal details used throughout the application for personalization. Includes properties for name, role, avatar path, location (using IANA time zone identifier), and an optional array of languages.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/magic-portfolio/content.mdx#_snippet_1

LANGUAGE: tsx
CODE:
```
const person = {
    firstName: "Selene",
    lastName: "Yu",
    get name() {
      return "...";
    },
    role: "Design Engineer",
    avatar: "/images/avatar.jpg",
    location: "Asia/Jakarta", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ["English", "Bahasa"], // optional: Leave the array empty if you don't want to display languages
};
```

----------------------------------------

TITLE: Configuring Home Page Content in TSX
DESCRIPTION: Defines the `home` object, structuring personalized content specifically for the home page. Includes properties for the navigation label, page title, description, headline, and subline, supporting both string and ReactNode values.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/magic-portfolio/content.mdx#_snippet_3

LANGUAGE: tsx
CODE:
```
const home = {
    label: "Home",
    title: "Selene Yu's Portfolio",
    description: "Portfolio website showcasing my work as a Design Engineer",
    headline: <>Design engineer and builder</>,
    subline: (
      <>
        I'm Selene, a design engineer at <InlineCode>FLY</InlineCode>, where I craft intuitive
        <br /> user experiences. After hours, I build my own projects.
      </>
    ),
};
```

----------------------------------------

TITLE: Rendering Basic Card Component TSX
DESCRIPTION: This snippet demonstrates how to render a basic Card component using Once UI, including nested components like Row, Column, Avatar, Text, Media, Line, and Icon to structure content and display information.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/card.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
<Row maxWidth={24}>
    <Card radius="l-4" direction="column" border="neutral-alpha-medium">
      <Row fillWidth paddingX="20" paddingY="12" gap="8" vertical="center">
        <Avatar size="xs" src="/images/avatar.jpg"/>
        <Text variant="label-default-s">Lorant One</Text>
      </Row>
      <Media
        border="neutral-alpha-weak"
        sizes="400px"
        fillWidth
        aspectRatio="4 / 3"
        radius="l"
        alt="Proxima b"
        src="/images/card.jpg"
      />
      <Column fillWidth paddingX="20" paddingY="24" gap="8">
        <Text variant="body-default-xl">Proxima b</Text>
        <Text onBackground="neutral-weak" variant="body-default-s">
          A planet so cruel on the surface, but once you explore what's underneath, you'll question
          everything you know. Yet, you vibe with it.
        </Text>
      </Column>
      <Line background="neutral-alpha-medium" />
      <Row
        paddingX="20" paddingY="12" gap="8" vertical="center"
        textVariant="label-default-s" onBackground="neutral-medium"
      >
        <Icon name="like" size="s" onBackground="neutral-strong" />
        34
        <Icon name="chat" size="s" onBackground="neutral-strong" marginLeft="24" />
        5
      </Row>
    </Card>
</Row>
```

----------------------------------------

TITLE: KbarItem Interface Definition in TSX
DESCRIPTION: This snippet defines the `KbarItem` TypeScript interface, outlining the structure and properties required for each command palette item. It specifies mandatory properties like `id`, `name`, `section`, `shortcut`, and `keywords`, along with optional properties such as `href`, `perform`, `icon`, and `description`.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/modules/kbar.mdx#_snippet_1

LANGUAGE: tsx
CODE:
```
interface KbarItem {
  id: string;          // Unique identifier for the item
  name: string;        // Display name in the command palette
  section: string;     // Group name for organizing items
  shortcut: string[];  // Keyboard shortcut keys
  keywords: string;    // Search keywords
  href?: string;       // Navigation URL (optional)
  perform?: () => void; // Action to perform when selected (optional)
  icon?: string;       // Icon name from Once UI icon set (optional)
  description?: ReactNode; // Additional description (optional)
}
```

----------------------------------------

TITLE: Applying Grid Layout Props to LogoCloud (TSX)
DESCRIPTION: Explains that LogoCloud extends the Grid component and demonstrates using standard Grid props like `columns` and `gap` to customize the layout.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/logoCloud.mdx#_snippet_3

LANGUAGE: tsx
CODE:
```
<LogoCloud 
    logos={[
        { size: "s" },
        { size: "s" },
        { size: "s" },
        { size: "s" }
    ]}
    columns="2"
    gap="24"
/>
```

----------------------------------------

TITLE: Using Buttons as Links in TSX
DESCRIPTION: Shows how buttons can function as links by providing an 'href' property, including examples with different variants.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/button.mdx#_snippet_7

LANGUAGE: tsx
CODE:
```
<Button href="#">
    Link Button
  </Button>
  <Button href="#" variant="secondary">
    Secondary Link
  </Button>
  <Button href="#" variant="tertiary" suffixIcon="chevronRight">
    Learn More
</Button>
```

----------------------------------------

TITLE: Conditional Rendering with Breakpoints (TSX)
DESCRIPTION: This snippet demonstrates how to use the `hide` and `show` props to control the visibility of `Row` components based on predefined breakpoints. Elements can be hidden or shown on specific screen sizes, allowing for responsive UI design.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/basics/structure.mdx#_snippet_19

LANGUAGE: tsx
CODE:
```
<Row hide="s" hide="m">
    <Text>Hidden on / below the "m" breakpoint</Text>
</Row>
<Row hide="l" show="m">
    <Text>Shown on / above the "m" breakpoint</Text>
</Row>
```

----------------------------------------

TITLE: Displaying Traffic Per Weekday with LineBarChart (JSX)
DESCRIPTION: This snippet demonstrates how to use the `LineBarChart` component to visualize traffic and conversion data per weekday. It configures the chart with a title, description, dual axes, a bottom-centered legend, and defines two series ('Traffic' and 'Conversions') with specific colors. The `data` prop provides the actual numerical values for each weekday.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/data/lineBarChart.mdx#_snippet_0

LANGUAGE: JSX
CODE:
```
<LineBarChart\n  marginTop="16"\n  marginBottom="24"\n  title="Traffic Per Weekday"\n  description="How many users we had per weekday"\n  axis="both"\n  legend={{\n    position: "bottom-center"\n  }}\n  series={[\n    { key: "Traffic", color: "blue" },\n    { key: "Conversions", color: "indigo" }\n  ]}\n  data={[\n    { name: "Mon", Traffic: 4500, Conversions: 2190 },\n    { name: "Tue", Traffic: 5200, Conversions: 4230 },\n    { name: "Wed", Traffic: 4800, Conversions: 3250 },\n    { name: "Thu", Traffic: 5900, Conversions: 3280 },\n    { name: "Fri", Traffic: 6800, Conversions: 4320 },\n    { name: "Sat", Traffic: 4800, Conversions: 3190 },\n    { name: "Sun", Traffic: 3900, Conversions: 3170 }\n  ]}\n/>
```

----------------------------------------

TITLE: Configuring Global Styles with Once UI (TSX)
DESCRIPTION: This snippet shows how to configure global styling options for Magic Docs, based on Once UI data-attributes. It defines theme, neutral, brand, accent, solid, border, surface, transition, and scaling settings.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/magic-docs/styling.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
theme:       'dark',         // dark | light
neutral:     'gray',         // sand | gray | slate
brand:       'blue',         // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
accent:      'indigo',       // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
solid:       'contrast',     // color | contrast
solidStyle:  'flat',         // flat | plastic
border:      'playful',      // rounded | playful | conservative
surface:     'translucent',  // filled | translucent
transition:  'all',          // all | micro | macro
scaling:     '100',          // 90 | 95 | 100 | 105 | 110
```

----------------------------------------

TITLE: Defining MobileMegaMenu Data Interfaces in TypeScript
DESCRIPTION: This snippet defines the TypeScript interfaces (`MenuGroup`, `MenuSection`, `MenuLink`) that specify the expected data structure for the `menuGroups` prop of the `MobileMegaMenu` component. These interfaces ensure type safety and provide a clear contract for the navigation data.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/modules/mobileMegaMenu.mdx#_snippet_2

LANGUAGE: ts
CODE:
```
interface MenuGroup {
  id: string;
  label: ReactNode;
  suffixIcon?: string;
  href?: string;
  selected?: boolean;
  sections?: MenuSection[];
}

interface MenuSection {
  title?: ReactNode;
  links: MenuLink[];
}

interface MenuLink {
  label: ReactNode;
  href: string;
  icon?: string;
  description?: ReactNode;
  selected?: boolean;
}
```

----------------------------------------

TITLE: Applying Fill and Fit Properties in TSX
DESCRIPTION: This snippet demonstrates how to use `fit`, `fillWidth`, and `fitHeight` props on `Column` components to control their size. `fit` makes the column fit its content, while `fillWidth` and `fitHeight` allow it to fill available width and fit content height, respectively. It shows how these properties affect the layout of child `Button` components.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/basics/structure.mdx#_snippet_4

LANGUAGE: tsx
CODE:
```
<Column fit>
    <Button>Continue</Button>
</Column>
<Column fillWidth fitHeight horizontal="center">
    <Button>Continue</Button>
</Column>

```

----------------------------------------

TITLE: Configuring Static Page Accessibility with RouteGuard (TSX)
DESCRIPTION: This snippet demonstrates how to define static page routes and their accessibility status using a JavaScript/TypeScript object. The `RouteGuard` component uses this configuration to determine which pages are accessible and displayed in navigation and search results.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/magic-docs/pages.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
const routes = {
    '/changelog': true,
    '/roadmap':   false,
};
```

----------------------------------------

TITLE: Initializing DateInput Component in TSX
DESCRIPTION: This snippet demonstrates the basic usage of the DateInput component for date selection. It initializes a state variable 'date' using 'useState' and defines a 'handleDateChange' function to update the selected date. The DateInput component is rendered with an ID, label, current value, and an 'onChange' handler.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/form-controls/dateInput.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
const [date, setDate] = useState<Date | undefined>(new Date());
  
const handleDateChange = (newDate: Date) => {
    setDate(newDate);
};

<DateInput
    id="date-input-example"
    label="Select Date"
    value={date}
    onChange={handleDateChange}
/>
```

----------------------------------------

TITLE: Defining Padding Bottom Utility Classes (JavaScript)
DESCRIPTION: This snippet defines a series of utility classes for the `padding-bottom` CSS property. Each entry maps a class name (e.g., `.pb-8`) to a CSS custom property (`var(--static-space-X)`) and its corresponding `rem` value, ensuring consistent vertical spacing based on the design system's static space scale.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/basics/spacing.mdx#_snippet_50

LANGUAGE: JavaScript
CODE:
```
[\".pb-8\
```

----------------------------------------

TITLE: Basic Flex Component Usage - TSX
DESCRIPTION: This snippet demonstrates the basic usage of the `Flex` component in Once UI, showcasing its layout capabilities. It uses various props like `marginTop`, `marginBottom`, `gap`, `radius`, `padding`, `border`, and `background` to style and arrange child `Background` components. The `Array.fill().map()` pattern is used to render multiple identical child elements dynamically.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/basics/structure.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
<Flex
  marginTop="16"
  marginBottom="24"
  fillWidth
  gap="12"
  radius="l"
  padding="l"
  border="neutral-medium"
  background="surface"
>
  {Array(6)
    .fill(null)
    .map((_, index) => (
      <Background
        background="neutral-alpha-weak"
        lines={{display: true, color: "neutral-alpha-weak"}}
        key={index}
        shadow="m"
        fillWidth
        radius="m"
        height={8}
        border="neutral-alpha-medium"
      />
    ))}
</Flex>
```

----------------------------------------

TITLE: Configuring Image Compression in MediaUpload (TSX)
DESCRIPTION: This snippet illustrates how to enable and customize image compression settings like quality, maximum dimensions, and output types, or disable compression entirely, using the `compress`, `quality`, `resizeMaxWidth`, `resizeMaxHeight`, and `convertTypes` props.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/modules/mediaUpload.mdx#_snippet_6

LANGUAGE: tsx
CODE:
```
<MediaUpload 
    compress
    quality={0.6}
    resizeMaxWidth={1280}
    resizeMaxHeight={720}
    convertTypes={["image/webp", "image/jpeg"]}
/>

<MediaUpload
    compress={false}
/>
```

----------------------------------------

TITLE: Disabling a Page in Magic Portfolio Routes (TSX)
DESCRIPTION: This snippet shows how to disable a specific page, such as '/gallery', by setting its value to `false` in the `routes` object. This prevents the page from being rendered by the `RouteGuard` component and typically hides it from navigation menus.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/magic-portfolio/pages.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
const routes = {
    '/':        true,
    '/about':   true,
    '/work':    true,
    '/blog':    true,
    '/gallery': false,
};
```

----------------------------------------

TITLE: Configuring Sidebar Appearance in TSX
DESCRIPTION: Configures the width and collapsible behavior of the sidebar within the `layout` object of the Magic Docs configuration file (`resources/config.js`). Specifies the sidebar width in units and whether it should be collapsible.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/magic-docs/sidebar.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
sidebar: {
    width: 16, // width of the sidebar
    collapsible: true, // accordion or static render
},
```

----------------------------------------

TITLE: Configuring Once UI Global Styles (TSX)
DESCRIPTION: Defines the global styling configuration for the application using Once UI data-attributes. This includes settings for theme, color palettes (neutral, brand, accent), element appearance (solid, border, surface), transitions, and UI scaling.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/magic-store/styling.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
theme:       'dark',         // dark | light
neutral:     'gray',         // sand | gray | slate
brand:       'blue',         // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
accent:      'indigo',       // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
solid:       'contrast',     // color | contrast
solidStyle:  'flat',         // flat | plastic
border:      'playful',      // rounded | playful | conservative
surface:     'translucent',  // filled | translucent
transition:  'all',          // all | micro | macro
scaling:     '100',          // 90 | 95 | 100 | 105 | 110
```

----------------------------------------

TITLE: Displaying Error State in Textarea (TSX)
DESCRIPTION: This snippet demonstrates how to visually indicate an error state for the `Textarea` component. By setting the `error` prop to `true` and providing a string to `errorMessage`, a validation message is displayed to the user.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/form-controls/textarea.mdx#_snippet_2

LANGUAGE: tsx
CODE:
```
<Textarea
    id="error-textarea"
    label="Description"
    placeholder="Enter a description"
    error={true}
    errorMessage="This field is required"
/>
```

----------------------------------------

TITLE: Setting Semantic HTML Tag for Text in TSX
DESCRIPTION: Explains how to change the underlying HTML element rendered by the Text component using the `as` prop, demonstrating examples like 'p', 'label', and 'strong'.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/text.mdx#_snippet_6

LANGUAGE: tsx
CODE:
```
<Text as="p">Rendered as a paragraph</Text>
<Text as="label">Rendered as a label</Text>
<Text as="strong">Rendered as strong</Text>
```

----------------------------------------

TITLE: Extending Kbar with Theme Toggle (TSX)
DESCRIPTION: This snippet demonstrates how to extend the Kbar command palette by adding a custom action. It shows an example of a theme toggle item, including its ID, name, section, keywords, performance function, and icon. This allows users to switch between light and dark modes directly from the Kbar.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/magic-docs/search.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
const kbar = [
    ...navigationKbarItems,
    ...docsItems,
    {
      id: "theme-toggle",
      name: theme === 'dark' ? "Light mode" : "Dark mode",
      section: "Theme",
      shortcut: [],
      keywords: "light mode, dark mode, theme, toggle, switch, appearance",
      perform: () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
      },
      icon: theme === 'dark' ? "light" : "dark",
    },
    // Add more items
];
```

----------------------------------------

TITLE: Controlling Component Dimensions with MaxWidth and AspectRatio in TSX
DESCRIPTION: This snippet demonstrates how to use `maxWidth` and `aspectRatio` props to control the dimensions of `Column` components. `maxWidth={20}` limits the width, implicitly applying `fillWidth`, while `aspectRatio="16/9"` maintains a fixed width-to-height ratio, ensuring consistent scaling.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/basics/structure.mdx#_snippet_6

LANGUAGE: tsx
CODE:
```
<Column maxWidth={20}>
    maxWidth: 20
</Column>
<Column fillWidth aspectRatio="16/9">
    aspectRatio: 16 / 9
</Column>

```

----------------------------------------

TITLE: Button Loading State (TSX)
DESCRIPTION: Demonstrates how to display a loading spinner within the Button component to indicate an ongoing action.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/button.mdx#_snippet_5

LANGUAGE: tsx
CODE:
```
<Button loading>
    Loading
  </Button>
  <Button variant="secondary" loading>
    Processing
  </Button>
  <Button variant="tertiary" loading>
    Saving
</Button>
```

----------------------------------------

TITLE: Displaying Avatar - TSX
DESCRIPTION: Demonstrates the basic usage of the Avatar component, showing how to display an image using the `src` prop, an initial using the `value` prop, and a fallback empty state using the `empty` prop. It uses a `Row` component for layout.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/avatar.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
<Row gap=\"16\">\n    <Avatar src=\"/images/avatar.jpg\" size=\"l\" />\n    <Avatar size=\"l\" value=\"Q\" />\n    <Avatar size=\"l\" empty />\n</Row>
```

----------------------------------------

TITLE: Basic RadioButton Usage (TSX)
DESCRIPTION: Demonstrates a basic `RadioButton` component with `name`, `value`, `label`, and `description` props. It includes an `onToggle` handler to log selection, showcasing fundamental interaction.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/form-controls/radioButton.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
<RadioButton
    name="subscription"
    value="monthly"
    label="Monthly subscription"
    description="Billed monthly at $9.99"
    onToggle={() => console.log('Selected monthly')}
/>
```

----------------------------------------

TITLE: Implementing Basic Dropdown Usage (TSX)
DESCRIPTION: Demonstrates a simple implementation of the Dropdown component with basic options. It shows how to manage the selected state and handle option selection.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/dropdown.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
const [selected, setSelected] = useState("");

const handleSelect = (value: string) => {
    setSelected(value);
};

return (
    <Dropdown
      selectedOption={selected}
      onSelect={handleSelect}
      padding="4"
      radius="m-4"
    >
      <Option
        label="Option 1"
        value="option1"
        selected={selected === "option1"}
        onClick={handleSelect}
      />
      <Option
        label="Option 2"
        value="option2"
        selected={selected === "option2"}
        onClick={handleSelect}
      />
      <Option
        label="Option 3"
        value="option3"
        selected={selected === "option3"}
        onClick={handleSelect}
      />
    </Dropdown>
);
```

----------------------------------------

TITLE: Configuring Global Styling Options (TSX)
DESCRIPTION: This snippet shows the configuration options available for global styling in the Magic Portfolio project. It defines the theme, neutral, brand, accent, solid, border, surface, transition, and scaling settings based on Once UI data-attributes.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/magic-portfolio/styling.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
theme:       'dark',         // dark | light
neutral:     'gray',         // sand | gray | slate
brand:       'blue',         // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
accent:      'indigo',       // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
solid:       'contrast',     // color | contrast
solidStyle:  'flat',         // flat | plastic
border:      'playful',      // rounded | playful | conservative
surface:     'translucent',  // filled | translucent
transition:  'all',          // all | micro | macro
scaling:     '100',          // 90 | 95 | 100 | 105 | 110
```

----------------------------------------

TITLE: Rendering ElementType in different forms (Link, Button, Div)
DESCRIPTION: Demonstrates how ElementType dynamically renders as a Next.js Link, an external anchor tag, a button, or a div based on the presence of props like `href`, `onClick`, or their absence.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/elementType.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
// Renders as a Next.js Link for internal navigation
<ElementType href="/about">
    Go to About
</ElementType>

// Renders as an anchor tag for external links
<ElementType href="https://example.com">
    Visit Example
</ElementType>

// Renders as a button when onClick is provided
<ElementType onClick={() => alert('Clicked!')}>
    Click Me
</ElementType>

// Renders as a div when no interactive props are provided
<ElementType className="container">
    Content
</ElementType>
```

----------------------------------------

TITLE: Boilerplate Once UI Component (TSX)
DESCRIPTION: Provides a basic structure for building Once UI components using React, TypeScript, and SCSS modules. It includes state management, effect hooks, ref forwarding, and class name merging.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
"use client";

import React, { useState, useEffect, forwardRef } from "react";
import classNames from "classnames";
import styles from "./Component.module.scss";
import { Flex } from "@/once-ui/components";

interface ComponentProps extends React.ComponentProps<typeof Flex> {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

const Component = forwardRef<HTMLDivElement, ComponentProps>(
    ({ children, className, style, ...rest }, ref) => {
      const [loading, setLoading] = useState(false);

      useEffect(() => {
        // Optional interactivity
      }, []);

      return (
        <Flex
          ref={ref}
          style={style}
          className={classNames(styles.component, className)}
          {...rest}
        >
          {children}
        </Flex>
      );
    }
);

Component.displayName = "Component";
export { Component };

```

----------------------------------------

TITLE: Generating Metadata (Next.js, TSX)
DESCRIPTION: This snippet demonstrates how to generate metadata for a page in Next.js, specifically focusing on creating the Open Graph image URL. It retrieves the page title and description, then constructs the `ogImage` URL using a base URL and the encoded page title, intended for use with `next/og` to dynamically generate social sharing images.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/magic-docs/seo.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
export async function generateMetadata() {
  const title = home.title;
  const description = home.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;
   ...
};
```

----------------------------------------

TITLE: Overriding Sidebar Section Title and Page Order with meta.json (TSX)
DESCRIPTION: Defines a `meta.json` structure used within content directories to override the default sidebar section title, specify the section's order, and define the custom order of pages within that section.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/magic-docs/sidebar.mdx#_snippet_1

LANGUAGE: tsx
CODE:
```
{
    "title": "Magic Portfolio",
    "order": 2,
    "pages": {
      "quick-start": 1,
      "pages": 2,
      "styling": 3,
      "content": 4,
      "work": 5,
      "blog": 6,
      "mailchimp": 7,
      "localization": 8,
      "seo": 9
    }
}
```

----------------------------------------

TITLE: Implementing NumberInput in TSX
DESCRIPTION: This snippet demonstrates how to use the `NumberInput` component to handle numeric input. It shows state management for the input value using `useState` and defines a `handleChange` function to update the value, along with setting `min`, `max`, and `step` props for range control.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/form-controls/input.mdx#_snippet_6

LANGUAGE: tsx
CODE:
```
const [value, setValue] = useState<number>(0);
  
const handleChange = (newValue: number) => {
    setValue(newValue);
};

<NumberInput
    id="number-input-example"
    label="Quantity"
    value={value}
    onChange={handleChange}
    min={0}
    max={100}
    step={1}
/>
```

----------------------------------------

TITLE: Button With Icons (TSX)
DESCRIPTION: Shows how to add prefix or suffix icons to the Button component using the `prefixIcon` and `suffixIcon` props.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/button.mdx#_snippet_4

LANGUAGE: tsx
CODE:
```
<Button prefixIcon="check">
    Confirm
  </Button>
  <Button suffixIcon="chevronRight">
    Next
  </Button>
  <Button prefixIcon="info" suffixIcon="chevronRight">
    Learn more
</Button>
```

----------------------------------------

TITLE: Configure Protected Routes in TSX
DESCRIPTION: This snippet shows how to define protected routes by adding their paths as keys with a boolean value of `true` to the `protectedRoutes` object in the `resources/config.js` file. The `RouteGuard` component uses this configuration to enforce password authentication for the listed paths.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/magic-portfolio/password.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
const protectedRoutes = {
  '/work/once-ui': true
};
```

----------------------------------------

TITLE: Controlling Switch State in TSX
DESCRIPTION: This example illustrates how to control the `Switch` component's state using React's `useState` hook. The `label` dynamically updates based on the `isChecked` prop, providing immediate feedback on whether the feature is enabled or disabled.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/form-controls/switch.mdx#_snippet_1

LANGUAGE: tsx
CODE:
```
const [isChecked, setIsChecked] = useState(false);

<Switch
    label={isChecked ? "Feature is now enabled" : "Feature is currently disabled"}
    isChecked={isChecked}
    onToggle={() => setIsChecked(!isChecked)}
/>
```

----------------------------------------

TITLE: Displaying Code Snippets with Once UI CodeBlock Component (TSX)
DESCRIPTION: This snippet demonstrates how to use the Once UI CodeBlock component for displaying code. It shows both the full component syntax for customizability and the short markdown syntax (triple backticks) for pre-configured usage. The example includes a JavaScript snippet within the CodeBlock to illustrate its functionality for highlighting and previewing code.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/magic-docs/components.mdx#_snippet_2

LANGUAGE: tsx
CODE:
```
// Full component syntax
<CodeBlock
    codes={[
      {
        code: "console.log('Hello, World!');",
        language: "javascript",
        label: "Example"
      }
    ]}
/>

// Short syntax example
```tsx
function greeting(name) {
    return `Hello, ${name}!`;
}

console.log(greeting('World'));
```
```

----------------------------------------

TITLE: Implementing PasswordInput with Toggle in TSX
DESCRIPTION: This snippet shows how to use the `PasswordInput` component, which includes a built-in toggle for visibility. It demonstrates managing the password state using `useState` and updating it via a standard `onChange` event handler for an HTML input element.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/form-controls/input.mdx#_snippet_8

LANGUAGE: tsx
CODE:
```
const [password, setPassword] = useState<string>('');
  
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
};

<PasswordInput
    id="password-input-example"
    label="Password"
    value={password}
    onChange={handleChange}
    placeholder="Enter your password"
/>
```

----------------------------------------

TITLE: Defining Vertical Padding Utility Classes in JavaScript
DESCRIPTION: This snippet defines a set of utility classes for applying vertical padding (padding-top and padding-bottom combined). Each entry maps a CSS class name (e.g., ".py-40") to a design system's static space variable (e.g., var(--static-space-40)) and its corresponding rem value. These classes are intended for use in a UI system to quickly apply consistent vertical spacing.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/basics/spacing.mdx#_snippet_46

LANGUAGE: JavaScript
CODE:
```
[".py-40", "var(--static-space-40)", "2.5rem"],
[".py-48", "var(--static-space-48)", "3rem"],
[".py-56", "var(--static-space-56)", "3.5rem"],
[".py-64", "var(--static-space-64)", "4rem"],
[".py-80", "var(--static-space-80)", "5rem"],
[".py-104", "var(--static-space-104)", "6.5rem"],
[".py-128", "var(--static-space-128)", "8rem"],
[".py-160", "var(--static-space-160)", "10rem"]
```

----------------------------------------

TITLE: Rendering Static Spacing Examples with JSX
DESCRIPTION: This JSX snippet maps over an array of pixel values to render `Background` components, visually representing static spacing tokens. Each `Background` component's height is dynamically set using a CSS variable `var(--static-space-${size})`, demonstrating how static spaces are applied and adjusted based on the 8px grid system. An `InlineCode` component displays the corresponding pixel value.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/basics/spacing.mdx#_snippet_0

LANGUAGE: JSX
CODE:
```
{[0, 1, 2, 4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64, 80, 104, 128, 160].map((size) => (
  <Background
    key={size}
    radius="s"
    overflow="visible"
    lines={{display: true, angle: -45, color: "neutral-alpha-weak", size: "8", thickness: 1}}
    background="neutral-alpha-weak"
    border="neutral-alpha-medium"
    center
    fillWidth
    style={{ 
      height: `var(--static-space-${size})`,
    }}
  >
    <InlineCode position="absolute" style={{ top: '-2rem' }}>{size}</InlineCode>
  </Background>
))}
```

----------------------------------------

TITLE: Using Skeleton Component (TSX)
DESCRIPTION: Demonstrates the basic usage of the Skeleton component with different shapes, sizes, and animation delays to create loading placeholders.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/skeleton.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
<Skeleton shape="circle" width="l" height="l" />
<Skeleton shape="line" delay="1" width="m" height="xs" />
<Skeleton shape="line" delay="2" width="l" height="s" />
<Skeleton shape="block" delay="3" width="l" minHeight="80" />
```

----------------------------------------

TITLE: Customizing Spinner ARIA Label for Accessibility (TSX)
DESCRIPTION: Illustrates how to set a custom ARIA label for the Spinner component to improve accessibility for screen readers. Customize the ARIA label for screen readers.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/spinner.mdx#_snippet_2

LANGUAGE: tsx
CODE:
```
<Spinner ariaLabel="Processing payment..." />
```

----------------------------------------

TITLE: Button Variants (TSX)
DESCRIPTION: Demonstrates the different visual variants available for the Button component, including primary, secondary, tertiary, and danger styles.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/button.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
<Button size="s" weight="default">
    Primary
  </Button>
  <Button size="s" weight="default" variant="secondary">
    Secondary
  </Button>
  <Button size="s" weight="default" variant="tertiary">
    Tertiary
  </Button>
  <Button size="s" weight="default" variant="danger">
    Danger
</Button>
```

----------------------------------------

TITLE: Displaying Structured Data with Once UI Table Component (TSX)
DESCRIPTION: This snippet illustrates the usage of the Once UI Table component for presenting data in a structured format. It defines table headers with content, keys, and sortability, and populates rows with example data, such as document properties. This component is suitable for displaying tabular datasets.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/magic-docs/components.mdx#_snippet_1

LANGUAGE: tsx
CODE:
```
<Table 
    data={{
      headers: [
        { content: "Name", key: "name", sortable: true },
        { content: "Type", key: "type", sortable: true },
        { content: "Description", key: "description" }
      ],
      rows: [
        ["title", "string", "The title of the document"],
        ["summary", "string", "A brief summary of the document content"],
        ["updatedAt", "string", "The date when the document was last updated"],
        ["navLabel", "string", "The label used in navigation menus"]
      ]
    }}
/>
```

----------------------------------------

TITLE: Basic FlipFx Component Usage (TSX)
DESCRIPTION: This snippet demonstrates the basic implementation of the `FlipFx` component, simulating a flipping card effect. It configures the component with a minimum height, aspect ratio, and defines both the `front` and `back` content using `Media` and `Flex` components respectively. The `front` displays an image, while the `back` shows text.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/effects/flipFx.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
<FlipFx
    minHeight={24}
    aspectRatio={3 / 4}
    front={
      <Media
        fill
        sizes="640px"
        src="/images/docs/once-ui/proxima-b.jpg"
        radius="l"
        border="brand-alpha-weak"
      />
    }
    back={
      <Flex fill background="surface" center
        radius="l"
        border="brand-alpha-weak">
        <Text
          align="center"
          variant="display-default-xs"
        >
          Proxima B
        </Text>
      </Flex>
    }
/>
```

----------------------------------------

TITLE: Implementing NavIcon Toggle React TSX
DESCRIPTION: This snippet demonstrates how to create a functional React component that uses the NavIcon and useState hook to manage the active state of the icon. Clicking the icon toggles the isActive state, which can then be used to control the visibility of a navigation menu. It also shows basic layout using Flex, Column, and Row components.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/navIcon.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
"use client";
import { NavIcon, Flex, Text, Row } from "@/once-ui/components";
import { useState } from "react";

function NavIconToggle() {
    const [isActive, setIsActive] = useState(false);
    
    const handleClick = () => {
      setIsActive(!isActive);
    };

    return (
      <Column fillWidth>
        <Flex 
          paddingX="20" 
          paddingY="8" 
          background="surface"
          border="surface"
          radius="l" 
          horizontal="space-between" 
          vertical="center"
          fillWidth
        >
          <Logo wordmark={false}/>
          <NavIcon 
            isActive={isActive} 
            onClick={handleClick} 
            aria-label="Toggle navigation menu"
            aria-expanded={isActive}
            aria-controls="demo-nav"
          />
        </Flex>
        
        {isActive && (
          <Column 
            id="demo-nav"
            padding="16" 
            background="surface" 
            border="surface"
            radius="l" 
            marginTop="8"
            fillWidth
            gap="8"
          >
            <ToggleButton fillWidth horizontal="start" size="l">
              Home
            </ToggleButton>
            <ToggleButton fillWidth horizontal="start" size="l">
              Products
            </ToggleButton>
            <ToggleButton fillWidth horizontal="start" size="l">
              About
            </ToggleButton>
            <ToggleButton fillWidth horizontal="start" size="l">
              Contact
            </ToggleButton>
          </Column>
        )}
      </Column>
    );
}
```

----------------------------------------

TITLE: Customizing Dialog with Flex Props (TSX)
DESCRIPTION: Demonstrates how to open and close a Dialog component using React's useState hook. Shows how to apply custom styling to the dialog using Flex props such as background and border. Includes example content within the dialog body.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/dialog.mdx#_snippet_3

LANGUAGE: tsx
CODE:
```
const [isOpen, setIsOpen] = useState(false);

return (
    <>
      <Button variant="danger" onClick={() => setIsOpen(true)}>
        Customized dialog
      </Button>
      <Dialog
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Customized dialog"
        maxWidth={48}
        background="danger-weak"
        border="danger-medium"
      >
        <Column fillWidth gap="16">
          <Feedback vertical="center" variant="danger">
            This dialog has custom styling applied through Flex props.
            You can customize the background, border, and other properties.
          </Feedback>
          <Text onBackground="danger-weak">
            Custom content can be added inside the dialog body.
          </Text>
          <Button variant="danger" onClick={() => setIsOpen(false)}>
            Close
          </Button>
        </Column>
      </Dialog>
    </>
);
```

----------------------------------------

TITLE: Constructing Responsive Grid Layouts (TSX)
DESCRIPTION: This snippet illustrates the use of the `Grid` component to create a responsive grid layout. It defines a 3-column grid for desktop and a 2-column grid for mobile, demonstrating how to arrange `Column` elements within the grid with properties like `fillWidth`, `columns`, `mobileColumns`, `gap`, `border`, `padding`, and `radius`.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/magic-docs/components.mdx#_snippet_9

LANGUAGE: tsx
CODE:
```
<Grid
    fillWidth
    columns="3"
    mobileColumns="2"
    gap="16"
  >
    <Column border="neutral-alpha-medium" padding="16" radius="m">
      <Text>Grid Item</Text>
    </Column>
    <Column border="neutral-alpha-medium" padding="16" radius="m">
      <Text>Grid Item</Text>
    </Column>
    <Column border="neutral-alpha-medium" padding="16" radius="m">
      <Text>Grid Item</Text>
    </Column>
    <Column border="neutral-alpha-medium" padding="16" radius="m">
      <Text>Grid Item</Text>
    </Column>
    <Column border="neutral-alpha-medium" padding="16" radius="m">
      <Text>Grid Item</Text>
    </Column>
    <Column border="neutral-alpha-medium" padding="16" radius="m">
      <Text>Grid Item</Text>
    </Column>
</Grid>
```

----------------------------------------

TITLE: Defining Page Metadata with MDX Frontmatter (TSX)
DESCRIPTION: This snippet shows the standard frontmatter syntax used in `.mdx` files to define metadata for a page. Properties like `title`, `summary`, `updatedAt`, `navLabel`, and `navIcon` are used for page headers, meta tags, and navigation display.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/magic-docs/pages.mdx#_snippet_1

LANGUAGE: tsx
CODE:
```
---
title: "Changelog"
summary: "Changelog of Magic Docs."
updatedAt: "2025-03-16"
navLabel: "Changelog"
navIcon: "changelog"
navTag: "New"
navTagVariant: "blue"
---
```

----------------------------------------

TITLE: Initializing DropdownWrapper with Basic Usage (TSX)
DESCRIPTION: This snippet demonstrates the basic usage of the DropdownWrapper component. It manages the open state and selected value, rendering a button as a trigger and a column of options as the dropdown content. Users can select an option, which updates the button label and closes the dropdown.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/dropdownWrapper.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
const [isOpen, setIsOpen] = useState(false);
const [selected, setSelected] = useState("");

const options = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" }
];

const handleSelect = (value: string) => {
    setSelected(value);
    setIsOpen(false);
};

return (
    <DropdownWrapper
      isOpen={isOpen}
      onOpenChange={setIsOpen}
      trigger={
        <Button 
          variant="secondary" 
          suffixIcon="chevronDown"
          onClick={() => setIsOpen(!isOpen)}
        >
          {selected ? options.find(opt => opt.value === selected)?.label : "Select an option"}
        </Button>
      }
      dropdown={
        <Column minWidth={10} padding="4" gap="2">
          {options.map((option) => (
            <Option
              key={option.value}
              label={option.label}
              value={option.value}
              selected={option.value === selected}
              onClick={handleSelect}
            />
          ))}
        </Column>
      }
    />
);
```

----------------------------------------

TITLE: Using OTPInput for Verification Codes in TSX
DESCRIPTION: This example illustrates the usage of the `OTPInput` component for one-time passwords. It integrates with a `useToast` hook to display a success message upon completion, demonstrating the `onComplete` callback which receives the full verification code.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/form-controls/input.mdx#_snippet_7

LANGUAGE: tsx
CODE:
```
const { addToast } = useToast();

const handleComplete = (code: string) => {
    addToast({
      variant: "success",
      message: "Verification code " + code + " submitted successfully"
    });
};

<OTPInput
    id="otp-input-example"
    length={6}
    onComplete={handleComplete}
    autoFocus
/>
```

----------------------------------------

TITLE: Adding an Action to a Toast (TSX)
DESCRIPTION: Include an optional `action` property when calling `addToast` to add an interactive element, such as a button, to the toast notification.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/toastProvider.mdx#_snippet_2

LANGUAGE: tsx
CODE:
```
addToast({\n    variant: "danger",\n    message: "Failed to save",\n    action: <Button size="xs">Retry</Button>\n});
```

----------------------------------------

TITLE: Applying Vertical Static Padding with CSS Classes
DESCRIPTION: These CSS utility classes apply static padding specifically to the top and bottom sides of an element. Each class corresponds to a `var(--static-space-X)` variable, ensuring consistent vertical spacing. This helps in managing vertical rhythm and component separation.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/basics/spacing.mdx#_snippet_45

LANGUAGE: CSS
CODE:
```
.py-0 { padding-top: var(--static-space-0); padding-bottom: var(--static-space-0); /* 0 */ }
.py-1 { padding-top: var(--static-space-1); padding-bottom: var(--static-space-1); /* 1px */ }
.py-2 { padding-top: var(--static-space-2); padding-bottom: var(--static-space-2); /* 0.125rem */ }
.py-16 { padding-top: var(--static-space-16); padding-bottom: var(--static-space-16); /* 1rem */ }
.py-32 { padding-top: var(--static-space-32); padding-bottom: var(--static-space-32); /* 2rem */ }
```

----------------------------------------

TITLE: Controlling Element Stacking with zIndex in TSX
DESCRIPTION: This snippet demonstrates how to use the `zIndex` prop to control the stacking order of `Row` components. Higher `zIndex` values bring elements to the front, allowing visual reversal of the default HTML order. The `zIndex` prop accepts values from -1 to 10.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/basics/structure.mdx#_snippet_22

LANGUAGE: tsx
CODE:
```
<Row zIndex="10"/>
<Row zIndex="8"/>
<Row zIndex="6"/>
<Row zIndex="4"/>
<Row zIndex="2"/>
<Row zIndex="0"/>
```

----------------------------------------

TITLE: Applying Custom Styling to Dropdown (TSX)
DESCRIPTION: Demonstrates how to customize the visual appearance of the Dropdown container using various styling props like `radius`, `border`, `background`, `shadow`, and `padding`.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/dropdown.mdx#_snippet_3

LANGUAGE: tsx
CODE:
```
const [selected, setSelected] = useState("");

const handleSelect = (value: string) => {
    setSelected(value);
};

return (
    <Dropdown
      selectedOption={selected}
      onSelect={handleSelect}
      radius="m-8"
      border="brand-alpha-medium"
      background="brand-alpha-weak"
      shadow="xl"
      padding="8"
    >
      <Option
        label="Small"
        value="small"
        selected={selected === "small"}
        onClick={handleSelect}
      />
      <Option
        label="Medium"
        value="medium"
        selected={selected === "medium"}
        onClick={handleSelect}
      />
      <Option
        label="Large"
        value="large"
        selected={selected === "large"}
        onClick={handleSelect}
      />
    </Dropdown>
);
```

----------------------------------------

TITLE: Displaying Images with Once UI Media Component (TSX)
DESCRIPTION: This snippet demonstrates using the `Media` component from Once UI to display an image. It configures the image source (`src`), display size (`sizes`), alternative text (`alt`), aspect ratio, and border radius (`radius`), providing an optimized way to render images.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/magic-docs/components.mdx#_snippet_10

LANGUAGE: tsx
CODE:
```
<Media
    src="/images/docs/magic-bio.jpg"
    sizes="640px"
    alt="Example image"
    aspectRatio="16/9"
    radius="l"
/>
```

----------------------------------------

TITLE: Visualizing Quarterly Financials with Multi-Series BarChart
DESCRIPTION: This BarChart visualizes quarterly financial data for 2023 and 2024, including 'Income', 'Expenses', and 'Profit'. It uses a multi-series approach to display all three metrics for each quarter, providing a comprehensive financial overview.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/data/barChart.mdx#_snippet_2

LANGUAGE: JSX
CODE:
```
<BarChart
  marginTop="16"
  marginBottom="24"
  title="Quarterly revenue"
  description="How much dough we made per quarter in 2023 and 2024"
    data={[
      { name: "Q1", Income: 35000, Expenses: 45000, Profit: 30000 },
      { name: "Q2", Income: 42000, Expenses: 48000, Profit: 36000 },
      { name: "Q3", Income: 55000, Expenses: 51000, Profit: 40000 },
      { name: "Q4", Income: 75000, Expenses: 52000, Profit: 48000 }
    ]}
    series={[
      { key: "Income" },
      { key: "Expenses" },
      { key: "Profit" }
    ]}
/>
```

----------------------------------------

TITLE: Comparing Daily Time Spent on Activities with BarChart
DESCRIPTION: This BarChart compares daily time spent on 'Reading' versus 'Social Media'. It uses an 'x' axis, 'xl' bar width, and an 'indigo' color for the 'Minutes' series. The chart highlights the significant difference in time allocation between the two activities.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/data/barChart.mdx#_snippet_1

LANGUAGE: JSX
CODE:
```
<BarChart
  marginTop="16"
  marginBottom="24"
  title="Daily Time Spent on Activities"
  description="Social media vs. reading"
  axis="x"
  barWidth="xl"
  series={{
    key: "Minutes",
    color: "indigo"
  }}
  data={[
    { activity: "Reading", Minutes: 16 },
    { activity: "Social Media", Minutes: 144 }
  ]}
/>
```

----------------------------------------

TITLE: Configuring a Line Chart with Once UI Data Viz Module (React/JSX)
DESCRIPTION: This snippet demonstrates how to configure a LineChart component from the Once UI data visualization module. It showcases various props such as title, axis, curve, date formatting, legend display, and data series definition. The chart visualizes 'GDP Growth vs. CO₂ Emissions' over time, requiring structured data with 'date' and series keys.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/data/setup.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
<LineChart
  marginTop="16"
  marginBottom="24"
  title="GDP Growth vs. CO₂ Emissions"
  axis="x"
  curve="linear"
  date={{
    start: new Date("2000-01-01"),
    end: new Date("2024-01-01"),
    format: "yyyy"
  }}
  legend={{
    display: true,
    position: "top-left"
  }}
  series={[
    { key: "GDP per Capita (USD)" },
    { key: "CO₂ per Capita (kg)" }
  ]}
  data={[
    { date: "2000-01-01", "CO₂ per Capita (kg)": 40000, "GDP per Capita (USD)": 5270 },
    { date: "2001-01-01", "CO₂ per Capita (kg)": 41000, "GDP per Capita (USD)": 5400 },
    { date: "2002-01-01", "CO₂ per Capita (kg)": 42000, "GDP per Capita (USD)": 5580 },
    { date: "2003-01-01", "CO₂ per Capita (kg)": 43000, "GDP per Capita (USD)": 5840 },
    { date: "2004-01-01", "CO₂ per Capita (kg)": 44000, "GDP per Capita (USD)": 6100 },
    { date: "2005-01-01", "CO₂ per Capita (kg)": 46000, "GDP per Capita (USD)": 6450 },
    { date: "2006-01-01", "CO₂ per Capita (kg)": 47000, "GDP per Capita (USD)": 6900 },
    { date: "2007-01-01", "CO₂ per Capita (kg)": 48000, "GDP per Capita (USD)": 7350 },
    { date: "2008-01-01", "CO₂ per Capita (kg)": 46000, "GDP per Capita (USD)": 7600 },
    { date: "2009-01-01", "CO₂ per Capita (kg)": 44000, "GDP per Capita (USD)": 7400 },
    { date: "2010-01-01", "CO₂ per Capita (kg)": 47000, "GDP per Capita (USD)": 7900 },
    { date: "2011-01-01", "CO₂ per Capita (kg)": 49000, "GDP per Capita (USD)": 8200 },
    { date: "2012-01-01", "CO₂ per Capita (kg)": 48000, "GDP per Capita (USD)": 8500 },
    { date: "2013-01-01", "CO₂ per Capita (kg)": 47000, "GDP per Capita (USD)": 8800 },
    { date: "2014-01-01", "CO₂ per Capita (kg)": 46000, "GDP per Capita (USD)": 9100 },
    { date: "2015-01-01", "CO₂ per Capita (kg)": 45000, "GDP per Capita (USD)": 9400 },
    { date: "2016-01-01", "CO₂ per Capita (kg)": 45000, "GDP per Capita (USD)": 9700 },
    { date: "2017-01-01", "CO₂ per Capita (kg)": 46000, "GDP per Capita (USD)": 10100 },
    { date: "2018-01-01", "CO₂ per Capita (kg)": 47000, "GDP per Capita (USD)": 10600 },
    { date: "2019-01-01", "CO₂ per Capita (kg)": 46000, "GDP per Capita (USD)": 11000 },
    { date: "2020-01-01", "CO₂ per Capita (kg)": 42000, "GDP per Capita (USD)": 10800 },
    { date: "2021-01-01", "CO₂ per Capita (kg)": 44000, "GDP per Capita (USD)": 11300 },
    { date: "2022-01-01", "CO₂ per Capita (kg)": 45000, "GDP per Capita (USD)": 11700 },
    { date: "2023-01-01", "CO₂ per Capita (kg)": 45000, "GDP per Capita (USD)": 12000 },
    { date: "2024-01-01", "CO₂ per Capita (kg)": 44000, "GDP per Capita (USD)": 12300 }
  ]
/>
```

----------------------------------------

TITLE: Configuring Layout Dimensions in Config File (TSX)
DESCRIPTION: This configuration object defines the key layout dimensions for different sections of the page, such as header, body, sidebar, content, sideNav, and footer. Dimensions are specified in REM units.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/magic-docs/styling.mdx#_snippet_2

LANGUAGE: tsx
CODE:
```
const layout = {
    // units are set in REM
    header: {
      width: 90 // max-width of the content inside the header
    },
    body: {
      width: 90 // max-width of the body
    },
    sidebar: {
      width: 16, // width of the sidebar
      collapsible: false // accordion or static render
    },
    content: {
      width: 44 // width of the main content block
    },
    sideNav: {
      width: 14 // width of the sideNav on document pages
    },
    footer: {
      width: 44 // width of the content inside the footer
    }
};
```

----------------------------------------

TITLE: Creating a Basic Card Component (TSX)
DESCRIPTION: This snippet demonstrates how to create a basic Card component using Once UI. It shows how to set properties like "href", "maxWidth", "radius", "direction", and "padding", and how to embed "Media" and "Column" components for content layout. The card displays a title and a description.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/magic-docs/components.mdx#_snippet_6

LANGUAGE: tsx
CODE:
```
<Card
    href=" "
    maxWidth={20}
    radius="l-4"
    direction="column"
    padding="4"
  >
    <Media src="/images/docs/magic-docs.jpg" aspectRatio="16/9" radius="l" sizes="400px" />
    <Column fillWidth padding="12" gap="8" horizontal="start">
      <Text variant="heading-strong-m" onBackground="neutral-strong" align="left">
        Card Title
      </Text>
      <Text variant="body-default-s" onBackground="neutral-weak" align="left">
        This is a description of the card. It can contain multiple lines of text.
      </Text>
    </Column>
</Card>
```

----------------------------------------

TITLE: Using TagInput for Multiple Keywords in TSX
DESCRIPTION: This example demonstrates the `TagInput` component for managing multiple tags. It initializes with a default set of tags and uses a `handleChange` function to update the array of tags, showcasing how to pass an array of strings as the `value` prop.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/form-controls/input.mdx#_snippet_9

LANGUAGE: tsx
CODE:
```
const [tags, setTags] = useState<string[]>(['React', 'Next.js']);
  
const handleChange = (newTags: string[]) => {
    setTags(newTags);
};

<TagInput
    id="tag-input-example"
    value={tags}
    onChange={handleChange}
    placeholder="Add interest"
    hasSuffix={<Kbd position="absolute" top="12" right="12">Enter</Kbd>}
/>
```

----------------------------------------

TITLE: Interactive Chip State Management - TSX
DESCRIPTION: Illustrates how to manage the `selected` state of a `Chip` component using React's `useState` hook. The `onClick` prop is used to toggle the chip's selection status, making it interactive for user selections.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/form-controls/chip.mdx#_snippet_1

LANGUAGE: tsx
CODE:
```
const [selected, setSelected] = useState<boolean>(true);

<Chip 
    label="Clickable" 
    selected={selected}
    onClick={() => setSelected(!selected)} 
/>
```

----------------------------------------

TITLE: Rendering IconButton Variants TSX
DESCRIPTION: Demonstrates rendering the IconButton component with various predefined visual variants such as primary, secondary, tertiary, danger, and ghost.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/iconButton.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
<IconButton icon="check" variant="primary" />
<IconButton icon="plus" variant="secondary" />
<IconButton icon="chevronDown" variant="tertiary" />
<IconButton icon="danger" variant="danger" />
<IconButton icon="info" variant="ghost" />
```

----------------------------------------

TITLE: Enabling Auto-resize for Textarea (TSX)
DESCRIPTION: This snippet demonstrates how to configure the `Textarea` component to automatically adjust its height based on the content. By setting the `lines` prop to 'auto', the textarea expands or shrinks dynamically, improving user experience for variable-length inputs.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/form-controls/textarea.mdx#_snippet_4

LANGUAGE: tsx
CODE:
```
<Textarea
    id="auto-resize-textarea"
    label="Notes"
    placeholder="Enter your notes"
    lines="auto"
/>
```

----------------------------------------

TITLE: Icon Accessibility (tsx)
DESCRIPTION: Explains how to control screen reader accessibility using the `decorative` prop.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/icon.mdx#_snippet_4

LANGUAGE: tsx
CODE:
```
// Hidden from screen readers (default)
<Icon name="check" decorative={true} />

// Accessible to screen readers
<Icon name="warning" decorative={false} />
```

----------------------------------------

TITLE: Using the Once UI Icon Component in TSX
DESCRIPTION: This example shows how to render an icon using the custom `Icon` component provided by the Once UI system. The component wraps the raw icon instance, allowing control over its appearance via props like `name` (specifying the icon from the library), `onBackground` (context for color), and `size`.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/icons.mdx#_snippet_1

LANGUAGE: tsx
CODE:
```
<Icon
    name="help"
    onBackground="neutral-medium"
    size="m"/>
```

----------------------------------------

TITLE: Aligning UI Components with Semantic Props in TSX
DESCRIPTION: This snippet demonstrates basic alignment of `Button` components within `Column` containers using semantic props. It shows default (start), `center` shorthand, and explicit `horizontal="end"` and `vertical="end"` alignments. The `Column` component manages layout, simplifying traditional CSS flexbox properties.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/basics/structure.mdx#_snippet_2

LANGUAGE: tsx
CODE:
```
<Column fillWidth minHeight={10}>
    <Button>Continue</Button>
</Column>
<Column fillWidth center minHeight={10}>
    <Button>Continue</Button>
</Column>
<Column fillWidth horizontal="end" vertical="end" minHeight={10}>
    <Button>Continue</Button>
</Column>
```

----------------------------------------

TITLE: Displaying TikTok Daily Time Spent with BarChart
DESCRIPTION: This BarChart displays the average daily time spent per user on TikTok from 2020 to 2025. It uses `barWidth='xl'`, hides the legend, and sets the series key to 'Minutes' with a 'contrast' color scheme. The data includes historical and projected values.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/data/barChart.mdx#_snippet_0

LANGUAGE: JSX
CODE:
```
<BarChart
  marginTop="16"
  marginBottom="24"
  title="The TikTok Takeover"
  description="Avg. daily time spent per user on TikTok (minutes)"
  barWidth="xl"
  legend={{
    display: false
  }}
  series={{
    key: "Minutes",
    color: "contrast"
  }}
  data={[
    { date: "2020-01-01", Minutes: 20, label: "2020" },
    { date: "2021-01-01", Minutes: 40, label: "2021" },
    { date: "2022-01-01", Minutes: 65, label: "2022" },
    { date: "2023-01-01", Minutes: 85, label: "2023" },
    { date: "2024-01-01", Minutes: 95, label: "2024" },
    { date: "2025-01-01", Minutes: 180, label: "2025 (proj.)" }
  ]}
/>
```

----------------------------------------

TITLE: Example of Generated HTML Meta Tags Output (HTML)
DESCRIPTION: This snippet presents the complete HTML output generated by the Meta.generate function, showcasing the resulting <title> and <meta> tags. It includes standard SEO meta tags, OpenGraph properties for social media sharing, and Twitter/X card data, ensuring comprehensive web presence.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/modules/meta.mdx#_snippet_3

LANGUAGE: html
CODE:
```
<title>Once UI: Build the future</title>
<meta name="description" content="An open-source design system for indie creators to ship like teams of 10+ alone.">

<meta property="og:title" content="Once UI: Build the future">
<meta property="og:description" content="An open-source design system for indie creators to ship like teams of 10+ alone.">
<meta property="og:type" content="website">
<meta property="og:url" content="https://once-ui.com">
<meta property="og:image" content="https://once-ui.com/images/cover.jpg">

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Once UI: Build the future">
<meta name="twitter:description" content="An open-source design system for indie creators to ship like teams of 10+ alone.">
<meta name="twitter:image" content="https://once-ui.com/images/cover.jpg">
```

----------------------------------------

TITLE: Embedding YouTube Videos with Once UI Media Component (TSX)
DESCRIPTION: This snippet shows how to embed a YouTube video using the Once UI `Media` component. It takes the YouTube video URL as the `src`, provides alternative text (`alt`), defines the aspect ratio, and sets the border radius, enabling seamless video integration within the application.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/magic-docs/components.mdx#_snippet_11

LANGUAGE: tsx
CODE:
```
<Media
    src="https://www.youtube.com/watch?v=M5lFtW1BvPc"
    alt="Example video"
    aspectRatio="16/9"
    radius="l"
/>
```

----------------------------------------

TITLE: Applying Absolute Positioning to UI Elements in TSX
DESCRIPTION: This snippet shows how to override the default `relative` positioning by setting an `Icon` component's `position` to `absolute`. It then uses `top` and `right` props with specific spacing token values (e.g., "12") to precisely place the icon relative to its nearest positioned ancestor, demonstrating how to layer elements.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/basics/structure.mdx#_snippet_7

LANGUAGE: tsx
CODE:
```
<Column padding="24">
    <Row fill/>
    <Icon position="absolute" top="12" right="12" name="close"/>
</Column>
```

----------------------------------------

TITLE: Integrating Kbar with Custom Items in TSX
DESCRIPTION: This snippet demonstrates how to define an array of `kbarItems` and integrate the `Kbar` component into a React layout. It shows how to pass the defined items to the `Kbar` component and include a trigger `Button` to open the command palette. The `kbarItems` define commands for navigation to 'Home' and 'Documentation'.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/modules/kbar.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
const kbarItems = [
    {
      id: 'home',
      name: 'Home',
      section: 'Navigation',
      shortcut: ['H'],
      keywords: 'home main start',
      href: '/',
      icon: 'home'
    },
    {
      id: 'docs',
      name: 'Documentation',
      section: 'Navigation',
      shortcut: ['D'],
      keywords: 'docs guide help',
      href: '/docs',
      icon: 'document'
    }
];

function MyLayout({ children }) {
    return (
      <>
        <header>
          <Kbar items={kbarItems}>
            <Button prefixIcon="command">Search</Button>
          </Kbar>
        </header>
        <main>
          {children}
        </main>
      </>
    );
}
```

----------------------------------------

TITLE: Implementing AccordionGroup Component in TSX
DESCRIPTION: This example illustrates the implementation of the Once UI `AccordionGroup` component in TSX. It shows how to define multiple collapsible sections using the `items` prop, where each item has a `title` and `content`. Accordions are useful for organizing and toggling the visibility of content, such as FAQs.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/magic-docs/components.mdx#_snippet_4

LANGUAGE: tsx
CODE:
```
<AccordionGroup 
    items={[
      {
        title: "Section 1",
        content: <Text>This is the content for section 1.</Text>
      },
      {
        title: "Section 2",
        content: <Text>This is the content for section 2.</Text>
      },
      {
        title: "Section 3",
        content: <Text>This is the content for section 3.</Text>
      }
    ]}
/>
```

----------------------------------------

TITLE: Applying Full Static Padding with CSS Classes
DESCRIPTION: These CSS utility classes apply static padding to all sides of an element. Each class corresponds to a specific `var(--static-space-X)` variable, providing consistent spacing values across the UI. They are designed for quick application of predefined padding amounts.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/basics/spacing.mdx#_snippet_43

LANGUAGE: CSS
CODE:
```
.p-0 { padding: var(--static-space-0); /* 0 */ }
.p-1 { padding: var(--static-space-1); /* 1px */ }
.p-2 { padding: var(--static-space-2); /* 0.125rem */ }
.p-16 { padding: var(--static-space-16); /* 1rem */ }
.p-32 { padding: var(--static-space-32); /* 2rem */ }
.p-160 { padding: var(--static-space-160); /* 10rem */ }
```

----------------------------------------

TITLE: Applying Horizontal Static Padding with CSS Classes
DESCRIPTION: These CSS utility classes apply static padding specifically to the left and right sides of an element. Each class maps to a `var(--static-space-X)` variable, ensuring consistent horizontal spacing. This is useful for controlling horizontal layout without affecting vertical spacing.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/basics/spacing.mdx#_snippet_44

LANGUAGE: CSS
CODE:
```
.mp-0 { padding-left: var(--static-space-0); padding-right: var(--static-space-0); /* 0 */ }
.mp-1 { padding-left: var(--static-space-1); padding-right: var(--static-space-1); /* 1px */ }
.mp-2 { padding-left: var(--static-space-2); padding-right: var(--static-space-2); /* 0.125rem */ }
.mp-16 { padding-left: var(--static-space-16); padding-right: var(--static-space-16); /* 1rem */ }
.mp-32 { padding-left: var(--static-space-32); padding-right: var(--static-space-32); /* 2rem */ }
.mp-160 { padding-left: var(--static-space-160); padding-right: var(--static-space-160); /* 10rem */ }
```

----------------------------------------

TITLE: Applying Responsive Right Padding with CSS
DESCRIPTION: These utility classes apply responsive padding specifically to the right side of an element. They use CSS variables to ensure consistent right spacing across various breakpoints.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/basics/spacing.mdx#_snippet_55

LANGUAGE: CSS
CODE:
```
.pr-xs { padding-right: var(--responsive-space-xs); /* Values: 80 / 64 / 40 */ }
```

LANGUAGE: CSS
CODE:
```
.pr-s { padding-right: var(--responsive-space-s); /* Values: 40 / 24 / 16 */ }
```

LANGUAGE: CSS
CODE:
```
.pr-m { padding-right: var(--responsive-space-m); /* Values: 24 / 16 / 12 */ }
```

LANGUAGE: CSS
CODE:
```
.pr-l { padding-right: var(--responsive-space-l); /* Values: 16 / 12 / 8 */ }
```

LANGUAGE: CSS
CODE:
```
.pr-xl { padding-right: var(--responsive-space-xl); /* Values: 12 / 8 / 4 */ }
```

----------------------------------------

TITLE: Dialog with Footer (TSX)
DESCRIPTION: Shows how to add a footer section to the Dialog component using the `footer` prop. The footer is typically used for action buttons like 'Cancel' and 'Confirm'.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/dialog.mdx#_snippet_1

LANGUAGE: tsx
CODE:
```
const [isOpen, setIsOpen] = useState(false);

return (
    <>
      <Button variant="secondary" onClick={() => setIsOpen(true)}>
        Dialog with footer
      </Button>
      <Dialog
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Dialog with footer"
        footer={
          <>
            <Button variant="secondary" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setIsOpen(false)}>
              Confirm
            </Button>
          </>
        }
      >
        <Text>
          This dialog has a footer with action buttons. The footer is a great place
          for primary and secondary actions.
        </Text>
      </Dialog>
    </>
);
```

----------------------------------------

TITLE: Applying Spacing to Text Component in TSX
DESCRIPTION: Illustrates the use of spacing props like `padding`, `marginBottom`, `paddingX`, and `paddingY` to add margin and padding around the Text component.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/text.mdx#_snippet_5

LANGUAGE: tsx
CODE:
```
<Text padding="8">
    With padding
</Text>
<Text marginBottom="16">
    With bottom margin
</Text>
<Text paddingX="12" paddingY="8">
    With horizontal and vertical padding
</Text>
```

----------------------------------------

TITLE: Basic Icon Usage (tsx)
DESCRIPTION: Demonstrates the basic usage of the Icon component with different names and background colors.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/icon.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
<Icon name="check" onBackground="info-medium"/>
<Icon name="danger" onBackground="danger-medium"/>
<Icon name="info" onBackground="brand-medium"/>
<Icon name="warning" onBackground="warning-medium"/>
```

----------------------------------------

TITLE: Implementing Basic Switch in TSX
DESCRIPTION: This snippet demonstrates a fundamental implementation of the `Switch` component. It includes a `label` and `description` for user guidance, and uses `isChecked` and `onToggle` props to manage its binary state, enabling or disabling notifications.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/form-controls/switch.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
<Switch
    label="Enable notifications"
    description="Receive updates about new features and improvements"
    isChecked={isChecked}
    onToggle={() => setIsChecked(!isChecked)}
/>
```

----------------------------------------

TITLE: Feedback Variants (TSX)
DESCRIPTION: Demonstrates how to render the Feedback component with different `variant` props (info, success, warning, danger) to display various types of messages.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/feedback.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
<Feedback
    title="Information" 
    description="This is an informational message for the user."
/>
<Feedback 
    variant="success" 
    title="Success" 
    description="Your action has been completed successfully."
/>
<Feedback 
    variant="warning" 
    title="Warning" 
    description="Please be aware of this important notice."
/>
<Feedback 
    variant="danger" 
    title="Error" 
    description="Something went wrong. Please try again."
/>
```

----------------------------------------

TITLE: Customizing Empty State in MediaUpload (TSX)
DESCRIPTION: This example demonstrates how to customize the empty state message of the MediaUpload component by providing a custom React node to the `emptyState` prop, enhancing user guidance.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/modules/mediaUpload.mdx#_snippet_3

LANGUAGE: tsx
CODE:
```
<MediaUpload
    emptyState={
      <Column gap="8" fill center align="center">
        <Icon name="image" size="m" />
        <Text variant="label-default-s">Add cover image</Text>
      </Column>
    } 
/>
```

----------------------------------------

TITLE: Enabling Time Selection with DateInput in TSX
DESCRIPTION: This example illustrates how to enable time selection within the DateInput component by setting the 'timePicker' prop to 'true'. It manages a 'dateTime' state variable and an 'handleDateTimeChange' function to update the combined date and time. The component is configured with an ID, label, value, 'onChange' handler, and the 'timePicker' prop.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/form-controls/dateInput.mdx#_snippet_1

LANGUAGE: tsx
CODE:
```
const [dateTime, setDateTime] = useState<Date | undefined>(new Date());
  
const handleDateTimeChange = (newDateTime: Date) => {
  setDateTime(newDateTime);
};

<DateInput
  id="date-time-input-example"
  label="Select Date & Time"
  value={dateTime}
  onChange={handleDateTimeChange}
  timePicker
/>
```

----------------------------------------

TITLE: Basic Usage of AutoScroll Component (TSX)
DESCRIPTION: This snippet demonstrates the basic implementation of the `AutoScroll` component, creating an infinitely scrollable container that automatically moves its children to the left. It includes multiple `Logo` components as children to illustrate the scrolling effect.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/autoScroll.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
<AutoScroll>
    <Logo/>
    <Logo/>
    <Logo/>
</AutoScroll>
```

----------------------------------------

TITLE: Overriding Button Styles with Data Attributes in TSX
DESCRIPTION: Shows how to override default button styles using custom data attributes for advanced customization.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/button.mdx#_snippet_10

LANGUAGE: tsx
CODE:
```
<Row wrap gap="16" horizontal="center">
    <Button data-border="rounded" size="s">Button</Button>
    <Button data-border="rounded" data-solid="color" size="s">Button</Button>
    <Button data-border="rounded" data-solid="inverse" data-brand="yellow" size="s">Button</Button>
</Row>
```

----------------------------------------

TITLE: Dynamically Rendering Pages with Once UI PageList (TSX)
DESCRIPTION: This snippet illustrates the use of the Once UI `PageList` component to dynamically render documentation pages based on a specified path, here 'magic-docs'. The `PageList` is nested within a `Grid` component to control its layout, displaying content in a responsive two-column or single-column format.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/magic-docs/components.mdx#_snippet_12

LANGUAGE: tsx
CODE:
```
<Grid columns="2" mobileColumns="1" gap="8">
    <PageList path={["magic-docs"]} />
</Grid>
```

----------------------------------------

TITLE: Applying Alpha Background and Text Color with `alpha` and `onBackground` in TSX
DESCRIPTION: This snippet demonstrates how to use `alpha` properties for subtle backgrounds and overlays. It applies a `success-alpha-weak` background and border to a `Row` component, with text colored `success-medium` using the `onBackground` prop. This allows for transparent or semi-transparent color effects.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/basics/structure.mdx#_snippet_10

LANGUAGE: tsx
CODE:
```
<Row background="success-alpha-weak" border="success-alpha-weak">
    <Text onBackground="success-medium">
      Text on alpha
    </Text>
</Row>
```

----------------------------------------

TITLE: Using Tag with Variants and Icons (TSX)
DESCRIPTION: Demonstrates the basic usage of the Tag component, showcasing how to apply different color variants and include prefix or suffix icons.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/tag.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
<Tag variant="brand" label="New" />
<Tag variant="success" label="Passed" prefixIcon="check" />
<Tag variant="danger" label="Error" suffixIcon="x" />
```

----------------------------------------

TITLE: StyleOverlay with Custom Trigger (TSX)
DESCRIPTION: Demonstrates how to use a custom element, specifically a Button component, as the trigger for the StyleOverlay by placing it within the component's children prop.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/styleOverlay.mdx#_snippet_1

LANGUAGE: tsx
CODE:
```
<StyleOverlay>
    <Row paddingTop="8" paddingRight="12">
      <Button>Open</Button>
    </Row>
</StyleOverlay>
```

----------------------------------------

TITLE: Basic Usage of CursorCard (TSX)
DESCRIPTION: This snippet shows a basic implementation of the CursorCard component. It uses a Button as the trigger element and displays a detailed Card component as the overlay content when the button is hovered. It requires the CursorCard, Button, and Card components.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/cursorCard.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
<CursorCard\n    placement=\"bottom-right\"\n    maxWidth={24}\n    trigger={\n      <Button weight=\"default\" variant=\"secondary\">\n        See details\n      </Button>\n    }\n    overlay={\n      <Card maxWidth={24} radius=\"l-4\" direction=\"column\" border=\"neutral-alpha-medium\">\n        {children}\n      </Card>\n    }\n/>
```

----------------------------------------

TITLE: Option Component States (TSX)
DESCRIPTION: Demonstrates different visual states for the Option component, including selected, highlighted, and danger states.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/option.mdx#_snippet_3

LANGUAGE: tsx
CODE:
```
<Option 
    label="Selected option"
    value="selected"
    selected
/>

<Option 
    label="Highlighted option"
    value="highlighted"
    highlighted
/>

<Option 
    label="Danger option"
    value="danger"
    danger
/>
```

----------------------------------------

TITLE: Initializing OgCard with URL (TSX)
DESCRIPTION: This snippet demonstrates the basic usage of the `OgCard` component by providing a URL. The component automatically fetches Open Graph metadata from the specified URL to display a rich link preview. It requires a valid URL string as input.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/ogCard.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
<OgCard 
    url="https://once-ui.com"
/>
```

----------------------------------------

TITLE: Controlling DropdownWrapper Placement (TSX)
DESCRIPTION: This example illustrates how to control the placement of the dropdown relative to its trigger element using the `placement` prop. The dropdown is configured to open upwards ('top'), demonstrating flexibility in positioning for different UI layouts.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/dropdownWrapper.mdx#_snippet_1

LANGUAGE: tsx
CODE:
```
const [isOpen, setIsOpen] = useState(false);

return (
  <Flex horizontal="center">
    <DropdownWrapper
      isOpen={isOpen}
      onOpenChange={setIsOpen}
      placement="top"
      trigger={
        <Button onClick={() => setIsOpen(!isOpen)}>
          Open Upward
        </Button>
      }
      dropdown={
        <Flex fillWidth padding="4" direction="column" gap="2">
          <Option
            label="Top option"
            value="top"
            onClick={() => setIsOpen(false)}
          />
          <Option
            label="Middle option"
            value="middle"
            onClick={() => setIsOpen(false)}
          />
          <Option
            label="Bottom option"
            value="bottom"
            onClick={() => setIsOpen(false)}
          />
        </Flex>
      }
    />
  </Flex>
);
```

----------------------------------------

TITLE: Adding Actions to a Banner (TSX)
DESCRIPTION: Demonstrates how to include interactive elements, such as buttons, within a Banner component. This example shows a banner with 'Decline' and 'Accept' buttons.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/banner.mdx#_snippet_3

LANGUAGE: tsx
CODE:
```
<Banner horizontal="space-between">
    Accept our privacy policy to continue.
    <Row gap="8">
      <Button size="s">Decline</Button>
      <Button size="s" variant="secondary">Accept</Button>
    </Row>
</Banner>
```

----------------------------------------

TITLE: Button Sizes (TSX)
DESCRIPTION: Illustrates the different size options (small, medium, large) for the Button component.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/button.mdx#_snippet_1

LANGUAGE: tsx
CODE:
```
<Button size="s">
    Small
  </Button>
  <Button size="m">
    Medium
  </Button>
  <Button size="l">
    Large
</Button>
```

----------------------------------------

TITLE: Displaying PieChart with Custom Title and Legend (JSX)
DESCRIPTION: This snippet demonstrates how to render a `PieChart` component with a custom title, description, and a detailed legend configuration. It also sets inner and outer ring sizes and provides sample data for 'Microplastics Ingested Annually'.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/data/pieChart.mdx#_snippet_0

LANGUAGE: JSX
CODE:
```
<PieChart
  marginTop="16"
  marginBottom="24"
  title="Microplastics Ingested Annually"
  description="Estimated particles per person per source"
  legend={{
    display: true,
    position: "top-left",
    direction: "column"
  }}
  ring={{ inner: 60, outer: 70 }}
  series={{
    key: "value",
  }}
  data={[
    { name: "Bottled Water", value: 94370 },
    { name: "Beer", value: 32270 },
    { name: "Salt", value: 11000 },
    { name: "Air", value: 9800 },
    { name: "Tap Water", value: 4240 },
    { name: "Honey", value: 1480 }
  ]}
/>
```

----------------------------------------

TITLE: Defining Blog Post Frontmatter (TSX)
DESCRIPTION: This snippet shows an example of the frontmatter used in a blog post MDX file. It defines metadata such as the title, publication date, image path, summary, and tags, which are used for display and SEO.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/magic-portfolio/blog.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
---
title: "Arriving to a new milestone in my career"
publishedAt: "2024-04-08"
image: "/images/gallery/img-02.jpg"
summary: "Every career is a journey, filled with challenges, growth, and those significant moments that mark a shift in our path."
tag: "Journal"
---
```

----------------------------------------

TITLE: Creating Enhanced Links with Once UI SmartLink (TSX)
DESCRIPTION: This snippet demonstrates the Once UI `SmartLink` component, which provides an enhanced method for creating links to internal or external resources. It includes an `href` attribute for the destination and a `suffixIcon` to append an icon, offering a customizable and visually rich linking experience.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/magic-docs/components.mdx#_snippet_13

LANGUAGE: tsx
CODE:
```
<SmartLink href=" " suffixIcon="chevronRight">Link with icon</SmartLink>
```

----------------------------------------

TITLE: Basic SmartLink Usage (TSX)
DESCRIPTION: `SmartLink` provides flexible and consistent inline navigation with built-in icon support and style overrides. This example shows a basic link with prefix and suffix icons.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/smartLink.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
<SmartLink href="#" prefixIcon="link" suffixIcon="arrowRight">\n  Learn more\n</SmartLink>
```

----------------------------------------

TITLE: Configuring DatePicker with TimePicker (TSX)
DESCRIPTION: This example shows how to enable time selection within the DatePicker component by adding the `timePicker` prop. It allows users to select both a date and a specific time, requiring `value` and `onChange` to manage the combined date-time state.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/form-controls/datePicker.mdx#_snippet_1

LANGUAGE: tsx
CODE:
```
<DatePicker 
    value={dateTime}
    onChange={handleDateTimeChange}
    timePicker
/>
```

----------------------------------------

TITLE: Applying Right Margin (Small) - CSS
DESCRIPTION: Applies a small responsive margin to the right of an element. This utility class sets the `margin-right` property to `var(--responsive-space-s)`, which resolves to `40px` on large screens, `24px` on medium screens, and `16px` on small screens.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/basics/spacing.mdx#_snippet_29

LANGUAGE: CSS
CODE:
```
.mr-s
```

----------------------------------------

TITLE: Set Default Selected SegmentedControl TSX
DESCRIPTION: This example shows how to set a default selected option for the SegmentedControl component using the defaultSelected prop. It initializes the control with the "week" option active in uncontrolled mode. The onToggle prop is included to handle user selection changes.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/segmentedControl.mdx#_snippet_1

LANGUAGE: tsx
CODE:
```
<SegmentedControl
    fillWidth={false}
    defaultSelected="week"
    buttons={[
      { value: "day", label: "Day" },
      { value: "week", label: "Week" },
      { value: "month", label: "Month" },
    ]}
    onToggle={(value) => console.log(value)}
/>
```

----------------------------------------

TITLE: Applying Bottom Margin (Extra Large) - CSS
DESCRIPTION: Applies an extra-large responsive margin to the bottom of an element. This utility class sets the `margin-bottom` property to `var(--responsive-space-xl)`, which resolves to `12px` on large screens, `8px` on medium screens, and `4px` on small screens.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/basics/spacing.mdx#_snippet_37

LANGUAGE: CSS
CODE:
```
.mb-xl
```

----------------------------------------

TITLE: Basic Accordion Usage (TSX)
DESCRIPTION: Demonstrates the basic usage of the Accordion component within a Column layout. It shows two Accordion instances, one initially open and one closed, each containing simple text content.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/accordion.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
<Column fillWidth>
		<Accordion title="Example" open>
			<Text onBackground="neutral-weak">
				Example content
			</Text>
		</Accordion>
		<Accordion title="Example">
			<Text onBackground="neutral-weak">
				Example content
			</Text>
		</Accordion>
</Column>
```

----------------------------------------

TITLE: Applying Responsive Left Padding with CSS
DESCRIPTION: These utility classes apply responsive padding specifically to the left side of an element. They use CSS variables to ensure consistent left spacing across various breakpoints.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/basics/spacing.mdx#_snippet_57

LANGUAGE: CSS
CODE:
```
.pl-xs { padding-left: var(--responsive-space-xs); /* Values: 80 / 64 / 40 */ }
```

LANGUAGE: CSS
CODE:
```
.pl-s { padding-left: var(--responsive-space-s); /* Values: 40 / 24 / 16 */ }
```

LANGUAGE: CSS
CODE:
```
.pl-m { padding-left: var(--responsive-space-m); /* Values: 24 / 16 / 12 */ }
```

LANGUAGE: CSS
CODE:
```
.pl-l { padding-left: var(--responsive-space-l); /* Values: 16 / 12 / 8 */ }
```

LANGUAGE: CSS
CODE:
```
.pl-xl { padding-left: var(--responsive-space-xl); /* Values: 12 / 8 / 4 */ }
```

----------------------------------------

TITLE: Applying Top Margin (Extra Small) - CSS
DESCRIPTION: Applies an extra-small responsive margin to the top of an element. This utility class sets the `margin-top` property to `var(--responsive-space-xs)`, which resolves to `80px` on large screens, `64px` on medium screens, and `40px` on small screens.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/basics/spacing.mdx#_snippet_23

LANGUAGE: CSS
CODE:
```
.mt-xs
```

----------------------------------------

TITLE: Rendering Logo with All Available Sizes (TSX)
DESCRIPTION: Illustrates the usage of all predefined size options for the Logo component: 'xs', 's', 'm', 'l', and 'xl'. This covers the full range of standard sizes.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/logo.mdx#_snippet_1

LANGUAGE: tsx
CODE:
```
<Logo size="xs" />
<Logo size="s" />
<Logo size="m" />
<Logo size="l" />
<Logo size="xl" />
```

----------------------------------------

TITLE: Adding Status Indicator to Avatar - TSX
DESCRIPTION: Shows how to add a colored status indicator to the Avatar. The `statusIndicator` prop is used with an object specifying the `color` property (e.g., "green", "yellow", "red", "gray") to visually represent user status.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/avatar.mdx#_snippet_2

LANGUAGE: tsx
CODE:
```
<Row gap=\"16\">\n    <Avatar value=\"G\" statusIndicator={{ color: \"green\" }} />\n    <Avatar value=\"Y\" statusIndicator={{ color: \"yellow\" }} />\n    <Avatar value=\"R\" statusIndicator={{ color: \"red\" }} />\n    <Avatar value=\"G\" statusIndicator={{ color: \"gray\" }} />\n</Row>
```

----------------------------------------

TITLE: Basic Usage of InteractiveDetails Component (TSX)
DESCRIPTION: This snippet demonstrates the fundamental usage of the `InteractiveDetails` component. It shows how to provide a basic label, add a descriptive text, and integrate a help tooltip for additional information, ensuring consistent presentation for interactive elements.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/form-controls/interactiveDetails.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
<InteractiveDetails 
    label="Basic label" 
/>

<InteractiveDetails 
    label="With description" 
    description="This is a description for the interactive element"
/>

<InteractiveDetails 
    label="With help tooltip" 
    iconButtonProps={{ tooltip: "This is a help tooltip", tooltipPosition: "right" }}
/>
```

----------------------------------------

TITLE: Applying Right Margin (Extra Large) - CSS
DESCRIPTION: Applies an extra-large responsive margin to the right of an element. This utility class sets the `margin-right` property to `var(--responsive-space-xl)`, which resolves to `12px` on large screens, `8px` on medium screens, and `4px` on small screens.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/basics/spacing.mdx#_snippet_32

LANGUAGE: CSS
CODE:
```
.mr-xl
```

----------------------------------------

TITLE: Configuring MegaMenu with Product Groups in JSX
DESCRIPTION: This snippet demonstrates the basic configuration of a `MegaMenu` component in JSX, defining its `menuGroups` prop. It shows how to structure a 'Products' group with sections like 'Featured' and individual links, including labels, hrefs, icons, and descriptions. This setup is crucial for creating multi-level navigation.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/modules/megaMenu.mdx#_snippet_0

LANGUAGE: JSX
CODE:
```
<MegaMenu
    menuGroups={[
      {
        id: "products",
        label: "Products",
        suffixIcon: "chevronDown",
        sections: [
          {
            title: "Featured",
            links: [
              {
                label: "Analytics",
                href: "/analytics",
                icon: "HiOutlineDocumentChartBar",
                description: "Get insights into your data",
              },
              {

```

----------------------------------------

TITLE: ToggleButton with Custom Content (TSX)
DESCRIPTION: Shows how to pass custom JSX content as children to the ToggleButton component, allowing for flexible layouts and inclusion of other components like `Tag` or `StatusIndicator`.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/toggleButton.mdx#_snippet_6

LANGUAGE: tsx
CODE:
```
<ToggleButton variant="outline">
    <Row vertical="center" gap="8">
      Dashboard
      <Tag label="New" size="s"/>
    </Row>
</ToggleButton>
<ToggleButton variant="outline">
    <Row vertical="center" gap="8">
      Notifications
      <StatusIndicator size="s"/>
    </Row>
</ToggleButton>
```

----------------------------------------

TITLE: Adding Icons to Dropdown Options (TSX)
DESCRIPTION: Illustrates how to include icons within dropdown options using the `hasPrefix` prop. Also shows adding a separator (`Line`) and a danger-styled option.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/dropdown.mdx#_snippet_1

LANGUAGE: tsx
CODE:
```
const [selected, setSelected] = useState("");

const handleSelect = (value: string) => {
    setSelected(value);
};

return (
    <Dropdown
      selectedOption={selected}
      onSelect={handleSelect}
      padding="8"
      radius="m-8"
    >
      <Option
        label="Edit"
        value="edit"
        hasPrefix={<Icon name="edit" size="xs" />}
        selected={selected === "edit"}
        onClick={handleSelect}
      />
      <Option
        label="Duplicate"
        value="duplicate"
        hasPrefix={<Icon name="copy" size="xs" />}
        selected={selected === "duplicate"}
        onClick={handleSelect}
      />
      <Line marginY="8" />
      <Option
        label="Delete"
        value="delete"
        hasPrefix={<Icon name="delete" size="xs" />}
        danger
        selected={selected === "delete"}
        onClick={handleSelect}
      />
    </Dropdown>
);
```

----------------------------------------

TITLE: Basic Chip Usage - TSX
DESCRIPTION: Demonstrates various basic `Chip` component configurations, including default selected, with a prefix icon, removable, and unselected states. This snippet illustrates how to render different visual representations of chips.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/form-controls/chip.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
<Chip label="Default" selected />
<Chip label="With icon" prefixIcon="calendar" />
<Chip label="Removable" onRemove={() => {}} />
<Chip label="Unselected" />
```

----------------------------------------

TITLE: CursorCard Placement Options (TSX)
DESCRIPTION: This snippet demonstrates how to use different 'placement' props ('top-left', 'top', 'bottom-right') with the CursorCard component to control the position of the overlay relative to the cursor. It requires the CursorCard, Button, and Row components.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/cursorCard.mdx#_snippet_1

LANGUAGE: tsx
CODE:
```
<CursorCard\n    placement=\"top-left\"\n    trigger={\n      <Button variant=\"secondary\">\n        Top left\n      </Button>\n    }\n    overlay={\n      <Row>\n        Top left\n      </Row>\n    }\n  />\n\n  <CursorCard\n    placement=\"top\"\n    trigger={\n      <Button variant=\"secondary\">\n        Top\n      </Button>\n    }\n    overlay={\n      <Row>\n        Top\n      </Row>\n    }\n  />\n\n  <CursorCard\n    placement=\"bottom-right\"\n    trigger={\n      <Button variant=\"secondary\">\n        Bottom right\n      </Button>\n    }\n    overlay={\n      <Row>\n        Bottom right\n      </Row>\n    }\n  />
```

----------------------------------------

TITLE: Disabling a RadioButton (TSX)
DESCRIPTION: Shows how to disable a `RadioButton` component by simply adding the `disabled` boolean prop. When disabled, the radio button prevents user interaction and appears visually distinct.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/form-controls/radioButton.mdx#_snippet_2

LANGUAGE: tsx
CODE:
```
<RadioButton
    label="Disabled radio button"
    disabled
/>
```

----------------------------------------

TITLE: Displaying Basic CodeBlock with Preview (TSX)
DESCRIPTION: This snippet demonstrates the basic usage of the `CodeBlock` component, including a copy button and an interactive preview. It shows how to embed a simple JavaScript code string within the `CodeBlock`'s `codes` array, rendered as a TSX example.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/modules/codeBlock.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
<CodeBlock\n    copyButton\n    preview={\n      <Button size=\"s\" weight=\"default\" prefixIcon=\"sparkle\">\n        Click me\n      </Button>\n    }\n    codes={[\n      {\n        code: \"const greeting = 'Hello, world!';\",\n        language: \"javascript\",\n        label: \"Example\"\n      }\n    ]}\n/>
```

----------------------------------------

TITLE: Basic Checkbox Usage in TSX
DESCRIPTION: Demonstrates a basic `Checkbox` component with a label and a description. This snippet shows how to render a simple, uncontrolled checkbox.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/form-controls/checkbox.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
<Checkbox
    label="Accept terms and conditions"
    description="By checking this box, you agree to our terms of service."
/>
```

----------------------------------------

TITLE: Implementing Multiple Background Effects in TSX
DESCRIPTION: This snippet demonstrates how to combine multiple background effects, including gradients, lines, and dots, using two `Background` components. The first component applies a top gradient, lines, and dots, while the second, absolutely positioned component, adds a bottom gradient for layered visual effects.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/background.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
<Background
    fill
    height="16"
    gradient={{ 
			display: true, 
			opacity: 1,
			x: 50,
			y: 0,
			colorStart: "accent-background-strong",
			colorEnd: "static-transparent"
    }}
    lines={{
			display: true,
			opacity: 1,
			size: "16",
			thickness: 1,
			angle: 90,
			color: "accent-background-strong"
    }}
    dots={{
			display: true,
			opacity: 1,
			size: "4",
			color: "page-background"
    }}
/>
<Background
		position="absolute"
		fill
		height={16}
		gradient={{ 
			display: true, 
			opacity: 1,
			x: 50,
			y: 100,
			width: 50,
			colorStart: "brand-background-weak",
			colorEnd: "static-transparent"
		}}
/>
```

----------------------------------------

TITLE: Managing Border Radius with T-shirt Sizes (TSX)
DESCRIPTION: This snippet illustrates how Once UI manages border radius using a T-shirt size model, ranging from `xs` (extra small) to `xl` (extra large). By applying the `radius` prop to a `Flex` component, developers can easily control the curvature of element corners, providing a consistent and scalable approach to design. The example shows the various size options available.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/basics/border.mdx#_snippet_1

LANGUAGE: tsx
CODE:
```
<Flex radius="xs | s | m | l | xl"/>
```

----------------------------------------

TITLE: Skeleton Shapes (TSX)
DESCRIPTION: Shows examples of the Skeleton component rendered with different shapes: line, circle, and block, illustrating how to control the visual form.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/skeleton.mdx#_snippet_1

LANGUAGE: tsx
CODE:
```
<Skeleton shape="line" height="xs" />
<Skeleton shape="circle" />
<Skeleton shape="block" minHeight="48" />
```

----------------------------------------

TITLE: Table Sorting - TSX
DESCRIPTION: Example showing how to enable sorting on specific columns by setting the `sortable` property to `true` in the header definition.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/table.mdx#_snippet_1

LANGUAGE: tsx
CODE:
```
<Table
    data={{
      headers: [
        { content: "Name", key: "name", sortable: true },
        { content: "Role", key: "role", sortable: true },
      ],
      rows: [
        ["Alice", "Engineer"],
        ["Bob", "Designer"],
        ["Carol", "Product"],
      ],
    }}
/>
```

----------------------------------------

TITLE: Basic ToggleButton Usage (TSX)
DESCRIPTION: Demonstrates the basic usage of the ToggleButton component, showing selected, default, and link states.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/toggleButton.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
<ToggleButton selected label="Selected" />
<ToggleButton label="Default" />
<ToggleButton label="Link" href="#" />
```

----------------------------------------

TITLE: Applying Top Margin (Large) - CSS
DESCRIPTION: Applies a large responsive margin to the top of an element. This utility class sets the `margin-top` property to `var(--responsive-space-l)`, which resolves to `16px` on large screens, `12px` on medium screens, and `8px` on small screens.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/basics/spacing.mdx#_snippet_26

LANGUAGE: CSS
CODE:
```
.mt-l
```

----------------------------------------

TITLE: Controlling Text Wrapping in Heading (TSX)
DESCRIPTION: Demonstrates how to use the 'wrap' prop to control text wrapping behavior in the Heading component, showing examples of the default 'balance' wrapping for readability and 'normal' wrapping.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/heading.mdx#_snippet_4

LANGUAGE: tsx
CODE:
```
<Heading>
    This text uses balance wrapping for optimal readability
</Heading>
<Heading wrap="normal">
    This text uses normal wrapping behavior
</Heading>
```

----------------------------------------

TITLE: Displaying Spinner with Different Sizes (TSX)
DESCRIPTION: Shows how to render the Spinner component using the available size options (xs, s, m, l, xl). Available in five size options to match layout context.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/spinner.mdx#_snippet_1

LANGUAGE: tsx
CODE:
```
<Spinner size="xs" />
<Spinner size="s" />
<Spinner size="m" />
<Spinner size="l" />
<Spinner size="xl" />
```

----------------------------------------

TITLE: Loading State for User Component (TSX)
DESCRIPTION: This snippet shows how to use the `loading` prop to display skeleton placeholders for the User component while data is being fetched.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/user.mdx#_snippet_1

LANGUAGE: tsx
CODE:
```
<User loading name="Lorant One" subline="Design Engineer" />
```

----------------------------------------

TITLE: Importing Components in TSX
DESCRIPTION: Imports necessary components like `InlineCode` and `Link` from specified paths for use within the content file. These components enable the inclusion of custom React elements in the content.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/magic-portfolio/content.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
import { InlineCode } from "@/once-ui/components";
import Link from "next/link";

const person = {
  ...
};
```

----------------------------------------

TITLE: Indeterminate Checkbox State in TSX
DESCRIPTION: Shows how to implement an indeterminate checkbox, typically used for a 'select all' functionality where some, but not all, child items are checked. It manages the state of multiple child checkboxes and updates the parent's `isChecked` and `isIndeterminate` props accordingly.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/form-controls/checkbox.mdx#_snippet_2

LANGUAGE: tsx
CODE:
```
const [items, setItems] = useState([
    { id: 1, label: 'Item 1', checked: true },
    { id: 2, label: 'Item 2', checked: false },
    { id: 3, label: 'Item 3', checked: true }
]);

const allChecked = items.every(item => item.checked);
const someChecked = items.some(item => item.checked);
const isIndeterminate = someChecked && !allChecked;

const toggleAll = () => {
    const newCheckedState = !allChecked;
    setItems(items.map(item => ({
      ...item,
      checked: newCheckedState
    })));
};

<Checkbox
    label="Select all items"
    isChecked={allChecked || isIndeterminate}
    isIndeterminate={isIndeterminate}
    onToggle={toggleAll}
/>

{items.map(item => (
    <Checkbox
      key={item.id}
      label={item.label}
      isChecked={item.checked}
      onToggle={() => {
        setItems(items.map(i => 
          i.id === item.id ? { ...i, checked: !i.checked } : i
        ));
      }}
    />
))}
```

----------------------------------------

TITLE: Initializing Textarea Component (TSX)
DESCRIPTION: This snippet demonstrates the basic usage of the `Textarea` component. It initializes a multi-line text input field with a label, placeholder text, and a specified number of initial lines. It's used for collecting general comments.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/form-controls/textarea.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
<Textarea
    id="basic-textarea"
    label="Comments"
    placeholder="Enter your comments here"
    lines={3}
/>
```

----------------------------------------

TITLE: Customizing ThemeSwitcher Layout (TSX)
DESCRIPTION: Shows how to customize the layout and appearance of the ThemeSwitcher component by passing standard Row props like direction, padding, gap, background, border, and radius.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/themeSwitcher.mdx#_snippet_1

LANGUAGE: tsx
CODE:
```
<ThemeSwitcher direction="column" padding="4" gap="8" background="surface" border="surface" radius="full" />
```

----------------------------------------

TITLE: Displaying Loading State in TSX Switch
DESCRIPTION: This snippet demonstrates how to show a loading spinner within the `Switch` component while an action is being processed. It simulates an asynchronous API call with a `setTimeout`, setting `loading={isLoading}` to indicate an ongoing operation and prevent further interaction.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/form-controls/switch.mdx#_snippet_2

LANGUAGE: tsx
CODE:
```
const [isChecked, setIsChecked] = useState(false);
const [isLoading, setIsLoading] = useState(false);

const handleToggle = () => {
    setIsLoading(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      setIsChecked(!isChecked);
      setIsLoading(false);
    }, 1000);
};

<Switch
    label="Processing"
    isChecked={isChecked}
    loading={isLoading}
    onToggle={handleToggle}
/>
```

----------------------------------------

TITLE: Customizing Empty State Message for Searchable Select in TSX
DESCRIPTION: This snippet demonstrates how to customize the message displayed when no options match the search query in a searchable `Select` component. By providing a `ReactNode` to the `emptyState` prop, developers can offer a more user-friendly experience. This requires `searchable` to be true and an `options` array, ensuring clear feedback to the user.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/form-controls/select.mdx#_snippet_2

LANGUAGE: tsx
CODE:
```
<Select
    id="empty-state-select"
    label="Choose a country"
    searchable={true}
    emptyState={
      <Text onBackground="neutral-weak">
        No matching countries found
      </Text>
    }
    options={[
      { label: "United States", value: "us" },
      { label: "Canada", value: "ca" },
      { label: "United Kingdom", value: "uk" },
      { label: "Australia", value: "au" }
    ]}
/>
```

----------------------------------------

TITLE: Applying Standard Border Radius in TSX
DESCRIPTION: This snippet demonstrates the application of standard border radius values (xs, s, m, l, xl) to `Row` components, following the extended T-shirt size model. It shows nested `Row` components with different radius values to illustrate the visual effect of various sizes. The `radius` prop applies a uniform border radius to all corners.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/basics/structure.mdx#_snippet_14

LANGUAGE: tsx
CODE:
```
<Row radius="xs-8" padding="8">
    <Row radius="xs-4" padding="4">
      <Row radius="xs"/>
    </Row>
  </Row>
  <Row radius="s-8" padding="8">
    <Row radius="s-4" padding="4">
      <Row radius="s"/>
    </Row>
  </Row>
  <Row radius="m-8" padding="8">
    <Row radius="m-4" padding="4">
      <Row radius="m"/>
    </Row>
  </Row>
  <Row radius="l-8" padding="8">
    <Row radius="l-4" padding="4">
      <Row radius="l"/>
    </Row>
  </Row>
  <Row radius="xl-8" padding="8">
    <Row radius="xl-4" padding="4">
      <Row radius="xl"/>
    </Row>
</Row>
```

----------------------------------------

TITLE: Using Placeholder for Input in TSX
DESCRIPTION: This snippet demonstrates the use of the `placeholder` prop for the `Input` component. The placeholder text 'Name' provides a hint to the user about the expected input, disappearing once the user starts typing. It's important not to use `placeholder` and `label` simultaneously.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/form-controls/input.mdx#_snippet_4

LANGUAGE: tsx
CODE:
```
<Input
    id="input-1"
    placeholder="Name"
/>
```

----------------------------------------

TITLE: Showing Loading State (TSX)
DESCRIPTION: Demonstrates how to use the 'loading' prop to display a skeleton block while the media content is being loaded.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/media.mdx#_snippet_1

LANGUAGE: tsx
CODE:
```
<Media
    loading
    src="/image.jpg"
    aspectRatio="16/9"
/>
```

----------------------------------------

TITLE: Configuring Chart Variant Prop in TSX
DESCRIPTION: This snippet highlights the `variant` prop, showing its possible values: `gradient`, `flat`, or `outline`. It demonstrates how to set the chart's appearance, along with other common chart properties like `axis`, `legend`, `date` format, `series` definitions, and `data` points.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/data/setup.mdx#_snippet_13

LANGUAGE: tsx
CODE:
```
border="transparent"
  variant="outline" // gradient | flat | outline
  axis="x"
  legend={{
    display: false,
  }}
  date={{
    format: "yyyy"
  }}
  series={[
    { key: "Area (km²)", color: "contrast" },
    { key: "Temp Anomaly (°C)", color: "red" }
  ]}
  data={[
    { date: "1950-01-01", "Area (km²)": 4.2, "Temp Anomaly (°C)": 0.6 },
    { date: "1975-01-01", "Area (km²)": 3.4, "Temp Anomaly (°C)": 0.9 },
    { date: "2000-01-01", "Area (km²)": 2.3, "Temp Anomaly (°C)": 1.1 },
    { date: "2025-01-01", "Area (km²)": 1.2, "Temp Anomaly (°C)": 1.4 }
  ]}
```

----------------------------------------

TITLE: Rendering Logo as a Link (TSX)
DESCRIPTION: Demonstrates how to make the Logo component behave as a hyperlink by providing an 'href' prop. Examples show linking to different paths and sizes.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/logo.mdx#_snippet_5

LANGUAGE: tsx
CODE:
```
<Logo href="/" />
<Logo href="/about" size="l" />
```

----------------------------------------

TITLE: Render Basic SegmentedControl TSX
DESCRIPTION: This snippet demonstrates the basic usage of the SegmentedControl component. It renders a control with three buttons and logs the selected value to the console when a button is toggled. It shows how to define buttons with value and label properties.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/segmentedControl.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
<SegmentedControl
    fillWidth={false}
    buttons={[
      { value: "day", label: "Day" },
      { value: "week", label: "Week" },
      { value: "month", label: "Month" },
    ]}
    onToggle={(value) => console.log(value)}
/>
```

----------------------------------------

TITLE: Adding Tooltips to IconButton TSX
DESCRIPTION: Illustrates how to attach tooltips to IconButtons using the `tooltip` prop and control their position with the `tooltipPosition` prop.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/iconButton.mdx#_snippet_2

LANGUAGE: tsx
CODE:
```
<IconButton variant="secondary" icon="check" tooltip="Confirm" tooltipPosition="left" />
<IconButton variant="secondary" icon="danger" tooltip="Delete" tooltipPosition="top" />
<IconButton variant="secondary" icon="info" tooltip="Information" tooltipPosition="bottom" />
<IconButton variant="secondary" icon="warning" tooltip="Warning" tooltipPosition="right" />
```

----------------------------------------

TITLE: Configuring Mailchimp Action URL (TSX)
DESCRIPTION: Sets the Mailchimp form action URL in the application configuration. This URL is used to submit newsletter subscription requests. Update the 'action' property with the embed form URL obtained from Mailchimp.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/magic-portfolio/mailchimp.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
const mailchimp = {
    action: 'https://url/subscribe/post?parameters',
    effects: {
      ...
    }
};
```

----------------------------------------

TITLE: Adding a New Page to Magic Portfolio Routes (TSX)
DESCRIPTION: This snippet demonstrates how to add a new page, '/music', to the application's routing configuration by adding an entry with a value of `true` to the `routes` object. This makes the page accessible via the `RouteGuard`, although it still needs to be added to the navigation menu.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/magic-portfolio/pages.mdx#_snippet_1

LANGUAGE: tsx
CODE:
```
const routes = {
    '/':        true,
    '/about':   true,
    '/work':    true,
    '/blog':    true,
    '/gallery': false,
    '/music': true,
};
```

----------------------------------------

TITLE: Charting Global Wealth Distribution with Divergent BarChart
DESCRIPTION: This BarChart illustrates the global wealth distribution between the 'Top 1%' and 'Bottom 99%' from 2000 to 2025, using a 'divergent' visualization type. It features a 's' bar width and positions the legend at the 'top-center' for clear comparison of the two groups over time.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/data/barChart.mdx#_snippet_3

LANGUAGE: JSX
CODE:
```
<BarChart
  marginTop="16"
  marginBottom="24"
  data-viz="divergent"
  title="Wealth distribution"
  description="Global share of wealth held by Top 1% vs Bottom 99%, 2000–2025"
  barWidth="s"
  legend={{
    position: "top-center"
  }}
  series={[
    { key: "Top 1%" },
    { key: "Bottom 99%" }
  ]}
  data={[
    { name: "2000", "Top 1%": 32.0, "Bottom 99%": 68.0 },
    { name: "2005", "Top 1%": 33.0, "Bottom 99%": 67.0 },
    { name: "2010", "Top 1%": 35.4, "Bottom 99%": 64.6 },
    { name: "2015", "Top 1%": 45.0, "Bottom 99%": 55.0 },
    { name: "2020", "Top 1%": 50.0, "Bottom 99%": 50.0 },
    { name: "2025 (est.)", "Top 1%": 52.5, "Bottom 99%": 47.5 }
  ]}
/>
```

----------------------------------------

TITLE: Displaying Button Variants in TSX
DESCRIPTION: This snippet demonstrates how to render different variants of the Once UI `Button` component in TSX. It showcases primary, secondary, and tertiary button styles, arranged within a `Row` component for layout. Buttons are fundamental UI elements used for user interaction, triggering actions, or navigation.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/magic-docs/components.mdx#_snippet_5

LANGUAGE: tsx
CODE:
```
<Row gap="8">
  <Button variant="primary" label="Primary" />
  <Button variant="secondary" label="Secondary" />
  <Button variant="tertiary" label="Tertiary" />
</Row>
```

----------------------------------------

TITLE: Basic Table Usage - TSX
DESCRIPTION: Basic example demonstrating the structure of the Table component with headers and rows.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/table.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
<Table
    data={{
      headers: [
        { content: "Name", key: "name" },
        { content: "Role", key: "role" },
      ],
      rows: [
        ["Alice", "Engineer"],
        ["Bob", "Designer"],
        ["Carol", "Product"],
      ],
    }}
/>
```

----------------------------------------

TITLE: Basic StatusIndicator Usage (TSX)
DESCRIPTION: Demonstrates the basic usage of the StatusIndicator component with different color props to represent various statuses like green, red, and yellow.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/statusIndicator.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
<StatusIndicator color="green" />
<StatusIndicator color="red" />
<StatusIndicator color="yellow" />
```

----------------------------------------

TITLE: Applying Right Margin (Large) - CSS
DESCRIPTION: Applies a large responsive margin to the right of an element. This utility class sets the `margin-right` property to `var(--responsive-space-l)`, which resolves to `16px` on large screens, `12px` on medium screens, and `8px` on small screens.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/basics/spacing.mdx#_snippet_31

LANGUAGE: CSS
CODE:
```
.mr-l
```

----------------------------------------

TITLE: Applying Text Variants TSX
DESCRIPTION: Shows how to use the `variant` prop to apply predefined combinations of type, weight, and size to the Text component.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/text.mdx#_snippet_1

LANGUAGE: tsx
CODE:
```
<Text variant="label-default-s">Label Default S</Text>
<Text variant="body-strong-xl">Body Strong XL</Text>
<Text variant="code-default-m">Code Default M</Text>
```

----------------------------------------

TITLE: Displaying Various Icon Components (TSX)
DESCRIPTION: This snippet illustrates how to display different Icon components from the Once UI system. It shows how to specify the "name" of the icon (e.g., 'rocket', 'close', 'check') and how to apply styling properties like "size" and "onBackground" to change their appearance. Icons are used to visually represent actions, objects, or concepts.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/magic-docs/components.mdx#_snippet_7

LANGUAGE: tsx
CODE:
```
<Icon name="rocket" size="m" />
<Icon name="close" size="m" />
<Icon name="check" onBackground="success-medium" size="m" />
<Icon name="info" onBackground="info-medium" size="m" />
<Icon name="warning" onBackground="warning-medium" size="m" />
<Icon name="chevronDown" size="m" />
<Icon name="search" size="m" />
```

----------------------------------------

TITLE: Applying Fade Effect with Media - TSX
DESCRIPTION: This snippet demonstrates how to apply top and bottom gradient fade effects to an image within a Flex container. It uses `Fade` components positioned absolutely to create transitions from the top and bottom edges, incorporating a pattern for visual texture.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/fade.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
<Flex border="brand-alpha-medium" fillWidth aspectRatio={4 / 3} radius="l" overflow="hidden">
    <Media src="/image.jpg" />
    <Fade
      fillWidth
      position="absolute"
      top="0"
      to="bottom"
      topRadius="l"
      height={12}
      pattern={{ display: true, size: "2" }}
    />
    <Fade
      fillWidth
      position="absolute"
      bottom="0"
      to="top"
      bottomRadius="l"
      height={12}
      pattern={{ display: true, size: "2" }}
    />
</Flex>
```

----------------------------------------

TITLE: UserMenu Loading State (TSX)
DESCRIPTION: Shows how to display a loading state for the UserMenu component by setting the `loading` prop to `true`. This is useful for indicating that profile data is being fetched.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/userMenu.mdx#_snippet_1

LANGUAGE: tsx
CODE:
```
<UserMenu loading />
```

----------------------------------------

TITLE: Setting Text Colors TSX
DESCRIPTION: Illustrates how to set the text color using the `onBackground` and `onSolid` props with different color tokens.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/text.mdx#_snippet_2

LANGUAGE: tsx
CODE:
```
<Text onBackground="neutral-strong">
    Neutral strong
</Text>
<Text onBackground="accent-weak">
    Accent weak
</Text>
<Text onSolid="brand-medium">
    On brand medium
</Text>
```

----------------------------------------

TITLE: Applying Solid Color and Text Color with `solid` and `onSolid` in TSX
DESCRIPTION: This snippet illustrates the use of the `solid` prop for applying a solid background color, typically for interactive elements, and the `onSolid` prop for setting the text color that contrasts with the solid background. The example uses `accent-medium` for the solid background and `accent-strong` for the text.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/basics/structure.mdx#_snippet_9

LANGUAGE: tsx
CODE:
```
<Row solid="accent-medium">
    <Text onSolid="accent-strong">
      Text on solid
    </Text>
</Row>
```

----------------------------------------

TITLE: Highlighting Lines in CodeBlock (TSX/JavaScript)
DESCRIPTION: This snippet demonstrates how to use the `highlight` prop of the `CodeBlock` component to emphasize specific lines of code. The `highlight` prop accepts a string value that specifies line numbers or ranges (e.g., '2,4-6'). The inner JavaScript code illustrates a `calculateTotal` function, with lines 2 and 4-6 highlighted.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/modules/codeBlock.mdx#_snippet_2

LANGUAGE: tsx
CODE:
```
<CodeBlock
		highlight="2,4-6"
		codes={[
			{
				code:
"function calculateTotal(items) {
let total = 0;
	
for (let i = 0; i < items.length; i++) {
		const item = items[i];
		total += item.price * item.quantity;
}
	
return total;
}",
				language: "javascript",
				label: "Highlight"
			}
		]}
/>
```

LANGUAGE: javascript
CODE:
```
function calculateTotal(items) {
let total = 0;
	
for (let i = 0; i < items.length; i++) {
		const item = items[i];
		total += item.price * item.quantity;
}
	
return total;
}
```

----------------------------------------

TITLE: Setting Border Style in Once UI (TSX)
DESCRIPTION: This snippet illustrates how to set the border-style property for elements in Once UI. It provides examples for applying solid and dashed border styles to Flex components using the borderStyle prop, corresponding to .border-solid and .border-dashed utility classes.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/basics/border.mdx#_snippet_4

LANGUAGE: tsx
CODE:
```
<Flex width="64" height="20" border="neutral-strong" radius="xs"/>
```

LANGUAGE: tsx
CODE:
```
<Flex width="64" height="20" border="neutral-strong" borderStyle="dashed" radius="xs"/>
```

----------------------------------------

TITLE: Basic Scroller Usage (TSX)
DESCRIPTION: Demonstrates the basic implementation of the Scroller component with horizontal content using a Row and multiple Flex items.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/scroller.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
<Scroller fadeColor="transparent">
    <Row gap="16">
      {Array(10).fill(0).map((_, i) => (
        <Flex key={i}/>
      ))}
    </Row>
</Scroller>
```

----------------------------------------

TITLE: Adding Custom Content to IconButton TSX
DESCRIPTION: Shows how to render custom content, such as text components, inside the IconButton using the `children` prop instead of just an icon.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/iconButton.mdx#_snippet_5

LANGUAGE: tsx
CODE:
```
<IconButton>
    <Text variant="body-strong-s" onSolid="neutral-medium">A</Text>
</IconButton>
<IconButton variant="secondary">
    <Text variant="body-strong-s">B</Text>
</IconButton>
<IconButton variant="tertiary">
    <Text variant="body-strong-s">C</Text>
</IconButton>
```

----------------------------------------

TITLE: Setting Border Width in Once UI (TSX)
DESCRIPTION: This snippet demonstrates how to control the border-width property using Once UI components. It shows examples of applying default (1px) and explicit (2px) border widths to Flex components, using the borderWidth prop. These correspond to .border-1 and .border-2 utility classes.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/basics/border.mdx#_snippet_3

LANGUAGE: tsx
CODE:
```
<Flex width="64" height="20" border="neutral-strong" radius="xs"/>
```

LANGUAGE: tsx
CODE:
```
<Flex width="64" height="20" border="neutral-strong" borderWidth="2" radius="xs"/>
```

----------------------------------------

TITLE: Adding BarChart Context with Title and Description in TSX
DESCRIPTION: This snippet demonstrates how to enhance a `BarChart` with contextual information using the `title` and `description` props. It sets a chart title 'Wealth distribution' and a descriptive subtitle 'Global share of wealth held by Top 1% vs Bottom 99%', providing clear context for the displayed data.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/data/setup.mdx#_snippet_5

LANGUAGE: tsx
CODE:
```
<BarChart\n    title="Wealth distribution"\n    description="Global share of wealth held by Top 1% vs Bottom 99%"\n    axis="none"\n    legend={{\n      position: "bottom-center"\n    }}\n    series={[\n      { key: "Top 1%" },\n      { key: "Bottom 99%" }\n    ]}\n    data={[\n      { label: "2025 (est.)", "Top 1%": 52.5, "Bottom 99%": 47.5 }\n    ]}\n/>
```

----------------------------------------

TITLE: Enabling Search Functionality for Select in TSX
DESCRIPTION: This example shows how to enable search functionality for the `Select` component by adding the `searchable` prop. This feature allows users to filter options in large lists, improving usability. The component still requires an `id`, `label`, and an `options` array, but now supports dynamic filtering based on user input.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/form-controls/select.mdx#_snippet_1

LANGUAGE: tsx
CODE:
```
<Select
  id="searchable-select"
  label="Choose a country"
  searchable
  options={[
    { label: "United States", value: "us" },
    { label: "Canada", value: "ca" },
    { label: "United Kingdom", value: "uk" },
    { label: "Australia", value: "au" },
    { label: "Germany", value: "de" },
    { label: "France", value: "fr" },
    { label: "Japan", value: "jp" },
    { label: "Brazil", value: "br" }
  ]}
/>
```

----------------------------------------

TITLE: Rendering YouTube Video (TSX)
DESCRIPTION: Illustrates how the component automatically detects and renders a YouTube video when a YouTube URL is provided to the 'src' prop.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/media.mdx#_snippet_3

LANGUAGE: tsx
CODE:
```
<Media
    src="https://www.youtube.com/watch?v=TQT_FSdxbC8"
    aspectRatio="16/9"
/>
```

----------------------------------------

TITLE: Using the Carousel Component
DESCRIPTION: This snippet demonstrates the basic usage of the Carousel component, displaying a list of images passed via the `images` prop.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/carousel.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
<Carousel
    images={[
      { src: "/images/1.jpg", alt: "Image 1" },
      { src: "/images/2.jpg", alt: "Image 2" },
    ]}
/>
```

----------------------------------------

TITLE: Applying Background and Text Color with `background` and `onBackground` in TSX
DESCRIPTION: This snippet demonstrates how to apply a background color using the `background` prop and a corresponding text color using the `onBackground` prop to a `Row` component. It ensures text visibility against the chosen background. The `brand-medium` color is used for both the background and the text's contrasting color.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/basics/structure.mdx#_snippet_8

LANGUAGE: tsx
CODE:
```
<Row background="brand-medium">
    <Text onBackground="brand-medium">
      Text on background
    </Text>
</Row>
```

----------------------------------------

TITLE: Adding Navigation Icon and Tag via Frontmatter (TSX)
DESCRIPTION: Illustrates how to use frontmatter properties (`navLabel`, `navIcon`, `navTag`, `navTagVariant`) in a content file to customize the appearance of the corresponding navigation item in the sidebar, adding an icon and a colored tag.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/magic-docs/sidebar.mdx#_snippet_2

LANGUAGE: tsx
CODE:
```
---
title: "Changelog"
summary: "Set up and customize the changelog of your documentation site."
updatedAt: "2025-03-17"
navLabel: "Changelog"
navIcon: "list"
navTag: "New"
navTagVariant: "blue"
---
```

----------------------------------------

TITLE: Heading Variants (TSX)
DESCRIPTION: Illustrates how to use the `variant` prop to apply different typographic styles, combining font type, weight, and size.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/heading.mdx#_snippet_1

LANGUAGE: tsx
CODE:
```
<Heading variant="display-strong-xl">
    Display Strong XL
</Heading>
<Heading variant="heading-default-m">
    Heading Default M
</Heading>
```

----------------------------------------

TITLE: Custom styles - Tooltip
DESCRIPTION: Shows how to apply custom styles to the Tooltip component using props like `background`, `border`, and `padding`.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/tooltip.mdx#_snippet_2

LANGUAGE: tsx
CODE:
```
<Tooltip prefixIcon="info" label="Helpful tip" background="brand-medium" border="brand-medium" padding="8" />
```

----------------------------------------

TITLE: Defining Padding Right Utility Classes in JavaScript
DESCRIPTION: This snippet defines utility classes for applying padding to the right of an element. Similar to other padding definitions, each class (e.g., ".pr-24") is linked to a design system's space variable and its corresponding rem or px value, ensuring uniform right-side spacing.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/basics/spacing.mdx#_snippet_48

LANGUAGE: JavaScript
CODE:
```
[".pr-0", "var(--static-space-0)", "0"],
[".pr-1", "var(--static-space-1)", "1px"],
[".pr-2", "var(--static-space-2)", "0.125rem"],
[".pr-4", "var(--static-space-4)", "0.25rem"],
[".pr-8", "var(--static-space-8)", "0.5rem"],
[".pr-12", "var(--static-space-12)", "0.75rem"],
[".pr-16", "var(--static-space-16)", "1rem"],
[".pr-20", "var(--static-space-20)", "1.25rem"],
[".pr-24", "var(--static-space-24)", "1.5rem"],
[".pr-32", "var(--static-space-32)", "2rem"],
[".pr-40", "var(--static-space-40)", "2.5rem"],
[".pr-48", "var(--static-space-48)", "3rem"],
[".pr-56", "var(--static-space-56)", "3.5rem"],
[".pr-64", "var(--static-space-64)", "4rem"],
[".pr-80", "var(--static-space-80)", "5rem"],
[".pr-104", "var(--static-space-104)", "6.5rem"],
[".pr-128", "var(--static-space-128)", "8rem"],
[".pr-160", "var(--static-space-160)", "10rem"]
```

----------------------------------------

TITLE: Button Fill Width (TSX)
DESCRIPTION: Demonstrates how to make a button fill the width of its container using the `fillWidth` prop.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/button.mdx#_snippet_3

LANGUAGE: tsx
CODE:
```
<Row gap="16" horizontal="center" maxWidth={20}>
    <Button size="s" weight="default">
      Default
    </Button>
    <Button size="s" fillWidth weight="default">
      Filled
    </Button>
</Row>
```

----------------------------------------

TITLE: Using Multiple HeadingLink Components (TSX)
DESCRIPTION: This example illustrates how to use multiple `HeadingLink` components to structure content with different heading levels (h2 and h3). It highlights their use for creating hierarchical sections that automatically appear in a table of contents when integrated with `HeadingNav`.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/modules/headingLink.mdx#_snippet_1

LANGUAGE: tsx
CODE:
```
<HeadingLink level={2} id="first-section">
    First Section
</HeadingLink>
<Text onBackground="neutral-weak" marginBottom="16">
    Content for the first section
</Text>
<HeadingLink level={3} id="subsection">
    Subsection
</HeadingLink>
<Text onBackground="neutral-weak">
    Content for the subsection
</Text>
```

----------------------------------------

TITLE: Basic Option Component (TSX)
DESCRIPTION: Demonstrates the basic usage of the Option component with only the required label and value props.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/option.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
<Option 
    label="Default option"
    value="default"
/>
```

----------------------------------------

TITLE: ElementType Fallback Rendering
DESCRIPTION: Demonstrates the default behavior of ElementType, rendering as a `<Flex>` component (a styled div) when no interactive props like `href`, `onClick`, or `type` are present.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/elementType.mdx#_snippet_3

LANGUAGE: tsx
CODE:
```
// Renders as a Flex component
<ElementType>
    <p>This is wrapped in a Flex component</p>
</ElementType>
```

----------------------------------------

TITLE: ToggleButton with Icons (TSX)
DESCRIPTION: Shows how to add prefix and suffix icons to the ToggleButton component using the `prefixIcon` and `suffixIcon` props.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/toggleButton.mdx#_snippet_1

LANGUAGE: tsx
CODE:
```
<ToggleButton label="Back" prefixIcon="chevronLeft" />
<ToggleButton label="Forward" suffixIcon="chevronRight" />
```

----------------------------------------

TITLE: Rendering Media Component (TSX)
DESCRIPTION: Basic usage of the Media component to render an image with specified source, alt text, radius, border, and aspect ratio.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/media.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
<Media
    src="/image.jpg"
    alt="Preview"
    radius="xl"
    border="neutral-alpha-medium"
    aspectRatio="16/9"
/>
```

----------------------------------------

TITLE: Configuring MegaMenu Component with Nested Navigation
DESCRIPTION: This snippet demonstrates how to configure the `MegaMenu` component by passing a `menuGroups` prop. It defines a complex nested navigation structure with sections, links, icons, and descriptions, showcasing typical usage for a multi-level menu.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/modules/megaMenu.mdx#_snippet_1

LANGUAGE: tsx
CODE:
```
<MegaMenu
  menuGroups={[
    {
      id: "products",
      label: "Products",
      suffixIcon: "chevronDown",
      sections: [
        {
          title: "By category",
          links: [
            {
              label: "Analytics",
              href: "/analytics",
              icon: "chartBar",
              description: "Track your data",
            },
            {
              label: "Security",
              href: "/security",
              icon: "HiOutlineShieldCheck",
              description: "Protect your assets",
            }
          ]
        },
        {
          title: "Tools",
          links: [
            {
              label: "Dashboard",
              href: "/dashboard",
              icon: "HiOutlineSquares2X2",
              description: "Monitor your metrics",
            },
            {
              label: "Settings",
              href: "/settings",
              icon: "HiCog8Tooth",
              description: "Configure your preferences",
            }
          ]
        }
      ]
    },
    {
      id: "solutions",
      label: "Solutions",
      suffixIcon: "chevronDown",
      sections: [
        {
          title: "By industry",
          links: [
            {
              label: "Enterprise",
              href: "/enterprise",
              icon: "cube",
              description: "Solutions for large organizations",
            },
            {
              label: "Startups",
              href: "/startups",
              icon: "rocket",
              description: "Perfect for growing companies",
            }
          ]
        },
        {
          title: "By team",
          links: [
            {
              label: "Developers",
              href: "/developers",
              icon: "code",
              description: "Tools and APIs",
            },
            {
              label: "Design teams",
              href: "/design",
              icon: "sparkle",
              description: "Creative solutions",
            }
          ]
        }
      ]
    },
    {
      id: "resources",
      label: "Resources",
      suffixIcon: "chevronDown",
      sections: [
        {
          title: "Documentation",
          links: [
            {
              label: "Guides",
              href: "/guides",
              icon: "book",
              description: "Learn how to use our platform",
            },
            {
              label: "API reference",
              href: "/api",
              icon: "code",
              description: "Technical documentation",
            }
          ]
        },
        {
          title: "Support",
          links: [
            {
              label: "Help center",
              href: "/help",
              icon: "infoCircle",
              description: "Get your questions answered",
            },
            {
              label: "Community",
              href: "/community",
              icon: "people",
              description: "Connect with other users",
            }
          ]
        }
      ]
    },
    {
      id: "company",
      label: "Company",
      suffixIcon: "chevronDown",
      sections: [
        {
          title: "About",
          links: [
            {
              label: "Our story",
              href: "/about",
              icon: "book",
              description: "Learn about our journey",
            },
            {
              label: "Careers",
              href: "/careers",
              icon: "rocket",
              description: "Join our team",
            }
          ]
        },
        {
          title: "Connect",
          links: [
            {
              label: "Blog",
              href: "/blog",
              icon: "document",
              description: "Latest updates and news",
            },
            {
              label: "Contact",
              href: "/contact",
              icon: "email",
              description: "Get in touch with us",
            }
          ]
        }
      ]
    }
  ]}
/>
```

----------------------------------------

TITLE: Basic UserMenu Usage (TSX)
DESCRIPTION: Demonstrates the basic implementation of the UserMenu component with user details, avatar, and a dropdown containing action options. It utilizes `Column`, `ClientOption`, and `Icon` components within the dropdown.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/userMenu.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
<UserMenu\n    name="Lorant One"\n    subline="Design Engineer"\n    placement="right-end"\n    avatarProps={{ src: "/images/avatar.jpg" }}\n    dropdown={\n      <Column gap="4" padding="4" minWidth={10}>\n        <ClientOption fillWidth hasPrefix={<Icon size="xs" onBackground="neutral-weak" name="settings" />} label="Settings" />\n        <ClientOption fillWidth hasPrefix={<Icon size="xs" onBackground="neutral-weak" name="logout" />} label="Log out" />\n      </Column>\n    }\n/>
```

----------------------------------------

TITLE: Configuring MobileMegaMenu Props in TSX
DESCRIPTION: This snippet demonstrates the structure of the `menuGroups` prop for the `MobileMegaMenu` component. It defines nested arrays of menu items, including labels, hrefs, icons, descriptions, and sub-sections, illustrating how to build a multi-level navigation menu.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/modules/mobileMegaMenu.mdx#_snippet_1

LANGUAGE: tsx
CODE:
```
                label: "Security",
                href: "/security",
                icon: "HiOutlineShieldCheck",
                description: "Protect your assets",
              },
            ],
          },
          {
            title: "Tools",
            links: [
              {
                label: "Dashboard",
                href: "/dashboard",
                icon: "HiOutlineSquares2X2",
                description: "Monitor your metrics",
              },
              {
                label: "Settings",
                href: "/settings",
                icon: "HiCog8Tooth",
                description: "Configure your preferences",
              },
            ],
          },
        ],
      },
      {
        id: "solutions",
        label: "Solutions",
        suffixIcon: "chevronDown",
        sections: [
          {
            title: "By industry",
            links: [
              {
                label: "Enterprise",
                href: "/enterprise",
                icon: "cube",
                description: "Solutions for large organizations",
              },
              {
                label: "Startups",
                href: "/startups",
                icon: "rocket",
                description: "Perfect for growing companies",
              },
            ],
          },
          {
            title: "By team",
            links: [
              {
                label: "Developers",
                href: "/developers",
                icon: "code",
                description: "Tools and APIs",
              },
              {
                label: "Design teams",
                href: "/design",
                icon: "sparkle",
                description: "Creative solutions",
              },
            ],
          },
        ],
      },
      {
        id: "resources",
        label: "Resources",
        suffixIcon: "chevronDown",
        sections: [
          {
            title: "Documentation",
            links: [
              {
                label: "Guides",
                href: "/guides",
                icon: "book",
                description: "Learn how to use our platform",
              },
              {
                label: "API reference",
                href: "/api",
                icon: "code",
                description: "Technical documentation",
              },
            ],
          },
          {
            title: "Support",
            links: [
              {
                label: "Help center",
                href: "/help",
                icon: "infoCircle",
                description: "Get your questions answered",
              },
              {
                label: "Community",
                href: "/community",
                icon: "people",
                description: "Connect with other users",
              },
            ],
          },
        ],
      },
      {
        id: "company",
        label: "Company",
        suffixIcon: "chevronDown",
        sections: [
          {
            title: "About",
            links: [
              {
                label: "Our story",
                href: "/about",
                icon: "book",
                description: "Learn about our journey",
              },
              {
                label: "Careers",
                href: "/careers",
                icon: "rocket",
                description: "Join our team",
              },
            ],
          },
          {
            title: "Connect",
            links: [
              {
                label: "Blog",
                href: "/blog",
                icon: "document",
                description: "Latest updates and news",
              },
              {
                label: "Contact",
                href: "/contact",
                icon: "email",
                description: "Get in touch with us",
              },
            ],
          },
        ],
      }
```

----------------------------------------

TITLE: Displaying Once UI Color Weights (JSX)
DESCRIPTION: This JSX snippet renders a grid showcasing the 12 available color weights for each scheme in Once UI. Each weight displays its numerical value and its contrast ratio, demonstrating how weights maintain consistent contrast regardless of the base scheme.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/basics/color.mdx#_snippet_1

LANGUAGE: JavaScript
CODE:
```
[
    { weight: 100, contrast: 1.05, theme: "dark" },
    { weight: 200, contrast: 1.15, theme: "dark" },
    { weight: 300, contrast: 2, theme: "dark" },
    { weight: 400, contrast: 3, theme: "dark" },
    { weight: 500, contrast: 4.5, theme: "dark" },
    { weight: 600, contrast: 7, theme: "dark" },
    { weight: 700, contrast: 10, theme: "light" },
    { weight: 800, contrast: 14, theme: "light" },
    { weight: 900, contrast: 16, theme: "light" },
    { weight: 1000, contrast: 18, theme: "light" },
    { weight: 1100, contrast: 19, theme: "light" },
    { weight: 1200, contrast: 20, theme: "light" }
  ].map((weight) => (
    <Column
      gap="4"
      padding="16"
      horizontal="center"
      align="center"
      textVariant="label-default-s"
      key={weight.weight}
      style={{ backgroundColor: `var(--scheme-cyan-${weight.weight})` }}
    >
      <Text data-theme={weight.theme} onBackground="brand-strong">
        {weight.weight}
      </Text>
      <Text
        data-theme={weight.theme}
        onBackground="brand-weak"
      >
        {weight.contrast}
      </Text>
    </Column>
  ))
```

----------------------------------------

TITLE: Displaying Initial Preview Image in MediaUpload (TSX)
DESCRIPTION: This snippet illustrates how to set an initial preview image for the MediaUpload component using the `initialPreviewImage` prop, useful for displaying existing images.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/modules/mediaUpload.mdx#_snippet_2

LANGUAGE: tsx
CODE:
```
<MediaUpload 
    initialPreviewImage="/image.jpg" 
/>
```

----------------------------------------

TITLE: Applying Nested Border Radius in Once UI (TSX)
DESCRIPTION: This snippet demonstrates how Once UI's border-radius system handles nested elements. It shows the application of varying border radius sizes (e.g., {radius}-8, {radius}-4, {radius}) to Flex components to maintain aesthetic consistency in nested containers, especially with static-size-4 and static-size-8 paddings. The radius variable represents different predefined sizes like xs, s, m, l, xl.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/basics/border.mdx#_snippet_2

LANGUAGE: tsx
CODE:
```
const radius = { xs | s | m | l | xl }

<Flex radius="{radius}-8">
    <Flex radius="{radius}-4">
      <Flex radius="{radius}"/>
    </Flex>
</Flex>
```

----------------------------------------

TITLE: StatusIndicator Color Variants (TSX)
DESCRIPTION: Shows examples of using various colors from the Once UI palette with the StatusIndicator component to represent a wide range of states or categories.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/statusIndicator.mdx#_snippet_2

LANGUAGE: tsx
CODE:
```
<StatusIndicator color="blue" />
<StatusIndicator color="indigo" />
<StatusIndicator color="violet" />
...
<StatusIndicator color="gray" />
```

----------------------------------------

TITLE: Basic StyleOverlay Implementation (TSX)
DESCRIPTION: Illustrates the fundamental usage of the StyleOverlay component in TSX, wrapping an IconButton within a Row to serve as the overlay's trigger and content container.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/styleOverlay.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
<StyleOverlay>
    <Row paddingTop="8" paddingRight="12">
      <IconButton icon="sparkle" />
    </Row>
</StyleOverlay>
```

----------------------------------------

TITLE: Basic Usage of MediaUpload Component (TSX)
DESCRIPTION: This snippet demonstrates the simplest way to render the MediaUpload component, providing a default drag-and-drop interface for image uploads.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/modules/mediaUpload.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
<MediaUpload />
```

----------------------------------------

TITLE: Exploring Tag Variants (TSX)
DESCRIPTION: Shows the full range of available color variants for the Tag component, including brand, accent, info, warning, success, danger, neutral, and gradient.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/tag.mdx#_snippet_2

LANGUAGE: tsx
CODE:
```
<Tag variant="brand">Brand</Tag>
<Tag variant="accent">Accent</Tag>
<Tag variant="info">Info</Tag>
<Tag variant="warning">Warning</Tag>
<Tag variant="success">Success</Tag>
<Tag variant="danger">Danger</Tag>
<Tag variant="neutral">Neutral</Tag>
<Tag variant="gradient">Gradient</Tag>
```

----------------------------------------

TITLE: Applying Spacing to Heading Component (TSX)
DESCRIPTION: Illustrates how to use various spacing props such as 'marginLeft', 'padding', 'marginTop', and 'marginBottom' to add margin and padding around the Heading component.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/heading.mdx#_snippet_5

LANGUAGE: tsx
CODE:
```
<Heading marginLeft="40">
    With left margin
</Heading>
<Heading padding="8">
    With padding
</Heading>
<Heading marginTop="16" marginBottom="16">
    With top and bottom margin
</Heading>
```

----------------------------------------

TITLE: Enable Fill Width SegmentedControl TSX
DESCRIPTION: This example illustrates how to make the SegmentedControl buttons fill the available width of their container. By default, fillWidth is true. This snippet shows the component with three simple buttons and the onToggle handler.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/segmentedControl.mdx#_snippet_3

LANGUAGE: tsx
CODE:
```
<SegmentedControl
  buttons={[
    { value: "a", label: "A" },
    { value: "b", label: "B" },
    { value: "c", label: "C" },
  ]}
  onToggle={(value) => console.log(value)}
/>
```

----------------------------------------

TITLE: Configuring Legend Display for PieChart in TSX
DESCRIPTION: This snippet illustrates how to customize the legend for a `PieChart` component using the `legend` prop. The `legend` prop is an object that can specify `display` (boolean), `position` (e.g., "bottom-center"), and `direction` (e.g., "column"). This example sets the legend to be displayed at the "bottom-center" position.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/data/setup.mdx#_snippet_8

LANGUAGE: tsx
CODE:
```
<PieChart\n    title="Carbon Emission by Country"\n    legend={{\n      display: true,\n      position: "bottom-center" // top-left | top-center | top-right | bottom-left | bottom-center | bottom-right\n    }}\n    ring={{ inner: 60, outer: 70 }}\n    series={{\n      key: "value"\n    }}\n    data={[\n      { name: "EU", value: 7 },\n      { name: "China", value: 28 },\n      { name: "United States", value: 14 },\n      { name: "Rest of the World", value: 51 }\n    ]}\n/>
```

----------------------------------------

TITLE: Carousel Indicator Types
DESCRIPTION: This example shows how to use the `indicator` prop to switch between 'line' (default) and 'thumbnail' navigation indicators for the Carousel component.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/carousel.mdx#_snippet_1

LANGUAGE: tsx
CODE:
```
<Carousel
    indicator="line"
    images={[
      { src: "/images/1.jpg", alt: "Image 1" },
      { src: "/images/2.jpg", alt: "Image 2" },
    ]}
/>

<Carousel
    indicator="thumbnail"
    images={[
      { src: "/images/1.jpg", alt: "Image 1" },
      { src: "/images/2.jpg", alt: "Image 2" },
    ]}
/>
```

----------------------------------------

TITLE: Setting Aspect Ratio for MediaUpload (TSX)
DESCRIPTION: This example shows how to configure the MediaUpload component with different aspect ratios, including a default and a custom '4 / 3' ratio, to fit various layout needs.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/modules/mediaUpload.mdx#_snippet_1

LANGUAGE: tsx
CODE:
```
<MediaUpload />
<MediaUpload aspectRatio="4 / 3" />
```

----------------------------------------

TITLE: Basic ThemeSwitcher Usage (TSX)
DESCRIPTION: Demonstrates the basic usage of the ThemeSwitcher component to provide theme toggling functionality. It integrates with ThemeProvider and uses useTheme() internally.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/themeSwitcher.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
<ThemeSwitcher />
```

----------------------------------------

TITLE: Displaying Once UI Color Schemes (JSX)
DESCRIPTION: This JSX snippet renders a grid of all 16 predefined color schemes in the Once UI system. Each scheme is displayed with its name and a background color derived from its corresponding CSS variable, demonstrating the base layer of the color system.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/basics/color.mdx#_snippet_0

LANGUAGE: JavaScript
CODE:
```
[
    { name: "Sand", color: "var(--scheme-sand-500)" },
    { name: "Gray", color: "var(--scheme-gray-500)" },
    { name: "Slate", color: "var(--scheme-slate-500)" },
    { name: "Red", color: "var(--scheme-red-500)" },
    { name: "Orange", color: "var(--scheme-orange-500)" },
    { name: "Yellow", color: "var(--scheme-yellow-500)" },
    { name: "Moss", color: "var(--scheme-moss-500)" },
    { name: "Green", color: "var(--scheme-green-500)" },
    { name: "Emerald", color: "var(--scheme-emerald-500)" },
    { name: "Aqua", color: "var(--scheme-aqua-500)" },
    { name: "Cyan", color: "var(--scheme-cyan-500)" },
    { name: "Blue", color: "var(--scheme-blue-500)" },
    { name: "Indigo", color: "var(--scheme-indigo-500)" },
    { name: "Violet", color: "var(--scheme-violet-500)" },
    { name: "Magenta", color: "var(--scheme-magenta-500)" },
    { name: "Pink", color: "var(--scheme-pink-500)" }
  ].map((scheme) => (
    <Flex
      padding="16"
      horizontal="center"
      align="center"
      textVariant="label-default-m"
      onSolid="neutral-strong"
      key={scheme.name}
      style={{ backgroundColor: scheme.color }}
    >
      {scheme.name}
    </Flex>
  ))
```

----------------------------------------

TITLE: Custom Content in User Component (TSX)
DESCRIPTION: This example illustrates how to use the `children` prop to provide custom content and override the default layout within the User component, useful for adding badges or actions.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/user.mdx#_snippet_2

LANGUAGE: tsx
CODE:
```
<User avatarProps={{ value: "Q" }}>
    <Column paddingX="8">
      <Text variant="label-default-m">
        Quasar
      </Text>
      <Text variant="body-default-xs" onBackground="neutral-weak">
        Cyberforge
      </Text>
    </Column>
</User>
```

----------------------------------------

TITLE: Displaying a Simple Banner (TSX)
DESCRIPTION: Demonstrates how to render a basic Banner component with simple text content. Useful for displaying general announcements or messages.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/banner.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
<Banner>
    Free shipping on orders over $50
</Banner>
```

----------------------------------------

TITLE: Configuring MDX Custom Components (TSX)
DESCRIPTION: This code defines a map of component names used in MDX files to their corresponding React/TSX component implementations. It allows custom components like Table and CodeBlock, or overridden standard elements like p and h1-h6, to be used within MDX content.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/magic-portfolio/blog.mdx#_snippet_1

LANGUAGE: tsx
CODE:
```
const components = {
    p: createParagraph as any,
    h1: createHeading(1) as any,
    h2: createHeading(2) as any,
    h3: createHeading(3) as any,
    h4: createHeading(4) as any,
    h5: createHeading(5) as any,
    h6: createHeading(6) as any,
    img: createImage as any,
    a: CustomLink as any,
    Table,
    CodeBlock,
};
```

----------------------------------------

TITLE: Using ColorInput in TSX
DESCRIPTION: This snippet demonstrates how to integrate the ColorInput component into a React application using TypeScript (TSX). It shows how to manage the selected color's state using `useState` and how to update it via an `onChange` handler, passing the current color value to the ColorInput component.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/form-controls/colorInput.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
const [colorValue, setColorValue] = useState("#4287f5");
  
const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColorValue(e.target.value);
};

<ColorInput
    id="color-input-example"
    label="Brand Color"
    value={colorValue}
    onChange={handleColorChange}
/>
```

----------------------------------------

TITLE: Adding Description to Textarea (TSX)
DESCRIPTION: This snippet shows how to include a descriptive text below the `Textarea` component using the `description` prop. This provides additional context or instructions to the user, enhancing usability.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/form-controls/textarea.mdx#_snippet_1

LANGUAGE: tsx
CODE:
```
<Textarea
    id="bio-textarea"
    label="Bio"
    placeholder="Tell us about yourself"
    description="Your bio will be displayed on your public profile"
    lines={5}
/>
```

----------------------------------------

TITLE: Displaying Feedback Messages with Once UI Feedback Component (TSX)
DESCRIPTION: This snippet demonstrates how to use the Once UI Feedback component to display critical information. It shows how to include an icon, set the variant to success, and provide a title and a longer description for the message. This component is ideal for user notifications or status updates.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/magic-docs/components.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
<Feedback
    icon
    variant="success"
    title="Feedback element"
    description="Longer description of the feedback message."
/>
```

----------------------------------------

TITLE: Basic ScrollToTop Usage (TSX)
DESCRIPTION: Demonstrates the basic implementation of the ScrollToTop component with a default offset of 100 pixels, wrapping a standard Button component.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/scrollToTop.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
<ScrollToTop offset={100}>
    <Button size="s" prefixIcon="arrowUp">
      Top
    </Button>
</ScrollToTop>
```

----------------------------------------

TITLE: Configuring PieChart Series Color (JSX)
DESCRIPTION: This snippet illustrates how to render a `PieChart` component with a specific series color set to 'green'. It also includes basic margin settings and sample categorical data for the chart.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/data/pieChart.mdx#_snippet_1

LANGUAGE: JSX
CODE:
```
<PieChart
  marginTop="16"
  marginBottom="24"
  series={{
    key: "value",
    color: "green"
  }}
  data = {[
    { name: 'Category A', value: 400 },
    { name: 'Category B', value: 300 },
    { name: 'Category C', value: 300 },
    { name: 'Category D', value: 200 }
  ]}
/>
```

----------------------------------------

TITLE: Displaying NavIcon States React TSX
DESCRIPTION: This simple snippet shows the NavIcon component rendered twice, once with the isActive prop set to false (inactive state) and once with it set to true (active state). It visually demonstrates how the icon changes appearance based on its state.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/navIcon.mdx#_snippet_1

LANGUAGE: tsx
CODE:
```
<NavIcon isActive={false} />
<NavIcon isActive={true} />
```

----------------------------------------

TITLE: Basic Usage of HeadingNav Component (TSX)
DESCRIPTION: This snippet illustrates how to integrate the `HeadingNav` component into a TSX application. It configures the navigation to occupy 12 units of width, maintain a sticky position 64 pixels from the top, and adjust its height to fit the available space, providing an automatic table of contents.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/modules/headingNav.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
<HeadingNav\n    width={12}\n    position=\"sticky\"\n    top=\"64\"\n    fitHeight\n/>
```

----------------------------------------

TITLE: Default Categorical Color Mode LineChart in TSX
DESCRIPTION: This LineChart example demonstrates the default categorical color assignment. Colors are automatically assigned to each series based on their key, without explicitly setting a `data-viz` prop, resulting in a categorical color scheme.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/data/setup.mdx#_snippet_14

LANGUAGE: tsx
CODE:
```
<LineChart
  marginTop="16"
  marginBottom="24"
  title="Tesla employee vs Elon Musk vs Hungary"
  description="Monthly compensation / state budget"
  axis="x"
  curve="step"
  date={{
    format: "yyyy",
  }}
  series={[
    { key: "Tesla Employee" },
    { key: "Elon Musk" },
    { key: "Hungary" }
  ]}
  data={[
    { date: "2000-01-01", "Elon Musk": 5000, "Tesla Employee": 3000, "Hungary": 2500000000 },
    { date: "2005-01-01", "Elon Musk": 5000, "Tesla Employee": 4200, "Hungary": 4000000000 },
    { date: "2010-01-01", "Elon Musk": 0, "Tesla Employee": 5500, "Hungary": 5000000000 },
    { date: "2015-01-01", "Elon Musk": 10000, "Tesla Employee": 6300, "Hungary": 6000000000 },
    { date: "2018-01-01", "Elon Musk": 100000000, "Tesla Employee": 7000, "Hungary": 6800000000 },
    { date: "2020-01-01", "Elon Musk": 2800000000, "Tesla Employee": 7600, "Hungary": 7500000000 },
    { date: "2023-01-01", "Elon Musk": 4500000000, "Tesla Employee": 8300, "Hungary": 7900000000 },
    { date: "2025-01-01", "Elon Musk": 5600000000, "Tesla Employee": 8800, "Hungary": 8200000000 }
  ]}
/>
```

----------------------------------------

TITLE: Setting Text Alignment in TSX
DESCRIPTION: Demonstrates how to control the horizontal alignment of the Text component using the `align` prop with values like 'left', 'center', and 'right'.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/text.mdx#_snippet_3

LANGUAGE: tsx
CODE:
```
<Text>
    Left aligned
</Text>
<Text align="center">
    Center aligned
</Text>
<Text align="right">
    Right aligned
</Text>
```

----------------------------------------

TITLE: Dismissible Feedback (TSX)
DESCRIPTION: Shows how to add a close button to the Feedback component using `showCloseButton` and handle the dismissal action with the `onClose` prop.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/feedback.mdx#_snippet_2

LANGUAGE: tsx
CODE:
```
<Feedback
    title="Dismissible Feedback" 
    description="This feedback can be dismissed by clicking the close button."
    showCloseButton={true}
    onClose={() => {
      // Handle close action
      console.log('Feedback closed');
    }}
/>
```

----------------------------------------

TITLE: Table Row Actions - TSX
DESCRIPTION: Illustrates how to add interactivity to table rows using the `onRowClick` prop, which receives the row index when a row is clicked.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/table.mdx#_snippet_2

LANGUAGE: tsx
CODE:
```
<Table
    onRowClick={(index) => alert(`Clicked row ${index}`)}
    data={{
      headers: [
        { content: "Task", key: "task" },
        { content: "Status", key: "status" },
      ],
      rows: [
        ["Launch", "In progress"],
        ["Prototype", "Done"],
      ],
    }}
/>
```

----------------------------------------

TITLE: AvatarGroup with Limit Prop (TSX)
DESCRIPTION: Illustrates using the 'limit' prop to restrict the number of displayed avatars, showing an overflow count indicator for additional items.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/avatarGroup.mdx#_snippet_2

LANGUAGE: tsx
CODE:
```
<AvatarGroup
    size="m"
    limit={3}
    avatars={[
      { value: "A" },
      { value: "B" },
      { value: "C" },
      { value: "D" },
      { value: "E" },
      { value: "F" },
      { value: "G" }
    ]}
/>
```

----------------------------------------

TITLE: Configuring Tooltip Positions for InteractiveDetails (TSX)
DESCRIPTION: This snippet demonstrates how to customize the positioning of the help tooltip associated with the `InteractiveDetails` component. It shows examples of placing the tooltip either on top or to the right of the interactive element using `iconButtonProps`.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/form-controls/interactiveDetails.mdx#_snippet_2

LANGUAGE: tsx
CODE:
```
<InteractiveDetails 
    label="With tooltip on top"
    iconButtonProps={{ 
      tooltip: "This tooltip appears on top", 
      tooltipPosition: "top" 
    }}
/>

<InteractiveDetails 
    label="With tooltip on right"
    iconButtonProps={{ 
      tooltip: "This tooltip appears on the right", 
      tooltipPosition: "right" 
    }}
/>
```

----------------------------------------

TITLE: Controlling Button Content Alignment in TSX
DESCRIPTION: Explains how to control the horizontal alignment of button content using the 'horizontal' prop, including options like start, center, end, and space-between.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/button.mdx#_snippet_9

LANGUAGE: tsx
CODE:
```
<Button fillWidth horizontal="start" prefixIcon="check">
    Left Aligned
  </Button>
  <Button fillWidth horizontal="center">
    Center Aligned
  </Button>
  <Button fillWidth horizontal="end" suffixIcon="chevronDown">
    Right Aligned
  </Button>
  <Button fillWidth horizontal="space-between" prefixIcon="check" suffixIcon="chevronDown">
    Space Between
</Button>
```

----------------------------------------

TITLE: ToggleButton Content Alignment (TSX)
DESCRIPTION: Illustrates different horizontal content alignment options for the ToggleButton component, including 'center', 'end', and 'space-between', often used with `fillWidth`.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/toggleButton.mdx#_snippet_5

LANGUAGE: tsx
CODE:
```
<ToggleButton variant="outline" label="Center" horizontal="center" fillWidth />
<ToggleButton variant="outline" label="End" horizontal="end" fillWidth suffixIcon="chevronRight" />
<ToggleButton variant="outline" label="Space between" horizontal="space-between" fillWidth prefixIcon="check" suffixIcon="chevronDown" />
```

----------------------------------------

TITLE: Customizing Textarea Styling with Radius (TSX)
DESCRIPTION: This snippet shows how to apply custom styling to the `Textarea` component, specifically controlling its border radius. It demonstrates setting `radius` to 'top' and 'bottom' to create distinct visual appearances, often used in grouped input fields.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/form-controls/textarea.mdx#_snippet_5

LANGUAGE: tsx
CODE:
```
<Column gap="-1" fillWidth>
    <Textarea
      id="custom-top"
      label="Top Radius"
      placeholder="This textarea has top radius"
      radius="top"
    />
    <Textarea
      id="custom-bottom"
      label="Bottom Radius"
      placeholder="This textarea has bottom radius"
      radius="bottom"
    />
</Column>
```

----------------------------------------

TITLE: ElementType Button Behavior
DESCRIPTION: Shows how ElementType renders as a `<button>` element when provided with an `onClick` handler or when the `type` prop is set to 'button' or 'submit'.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/elementType.mdx#_snippet_2

LANGUAGE: tsx
CODE:
```
// Renders as a button with onClick handler
<ElementType onClick={() => console.log('Button clicked')}>
    Perform Action
</ElementType>

// Renders as a submit button
<ElementType type="submit">
    Submit Form
</ElementType>
```

----------------------------------------

TITLE: Skeleton Animation Delay (TSX)
DESCRIPTION: Demonstrates using the 'delay' prop to stagger the animation effect for multiple Skeleton components, improving the perceived loading experience.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/components/skeleton.mdx#_snippet_3

LANGUAGE: tsx
CODE:
```
<Skeleton shape="line" width="l" delay="1" />
<Skeleton shape="line" width="m" delay="2" />
<Skeleton shape="line" width="s" delay="3" />
```

----------------------------------------

TITLE: Adding Description to Input Component in TSX
DESCRIPTION: This example shows how to add supplementary information below the `Input` component using the `description` prop. The description 'Provide your email address in the format name@domain.com' offers additional guidance to the user regarding the required input format.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/form-controls/input.mdx#_snippet_5

LANGUAGE: tsx
CODE:
```
<Input
    id="input-1"
    label="Email"
    description="Provide your email address in the format name@domain.com"
/>
```

----------------------------------------

TITLE: Configuring Axis Visibility for LineChart in TSX
DESCRIPTION: This snippet demonstrates how to configure the `axis` prop for a `LineChart` component. The `axis` prop accepts values like "x", "y", "both", or "none" to control the visibility of the x and y axes. This example sets the axis to "both", displaying both axes.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/data/setup.mdx#_snippet_7

LANGUAGE: tsx
CODE:
```
<LineChart\n    title="CEO vs Employee Paycheck"\n    axis="both" // x | y | both | none\n    date={{\n      format: "yyyy"\n    }}\n    series={[\n      { key: "Employee Paycheck", color: "green" },\n      { key: "CEO Paycheck", color: "red" }\n    ]}\n    data={[\n      { date: new Date("1980-01-01"), "CEO Paycheck": 500000, "Employee Paycheck": 25000 },\n      { date: new Date("1990-01-01"), "CEO Paycheck": 800000, "Employee Paycheck": 30000 },\n      { date: new Date("2000-01-01"), "CEO Paycheck": 1200000, "Employee Paycheck": 33000 },\n      { date: new Date("2010-01-01"), "CEO Paycheck": 1600000, "Employee Paycheck": 35000 },\n      { date: new Date("2020-01-01"), "CEO Paycheck": 3000000, "Employee Paycheck": 40000 }\n    ]}\n/>
```

----------------------------------------

TITLE: Configuring LineChart for Time Series Data in TSX
DESCRIPTION: This snippet illustrates how to set up a `LineChart` for time series data. It highlights the use of the `date` prop for formatting dates (e.g., 'yyyy') and how to structure the `data` array with `Date` objects for each entry, along with `series` definitions.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/data/setup.mdx#_snippet_4

LANGUAGE: tsx
CODE:
```
<LineChart\n    title="Cost of College vs. Income"\n    axis="x"\n    date={{\n      format: "yyyy"\n    }}\n    series={[\n      { key: "Median Household Income", color: "cyan" },\n      { key: "College Tuition", color: "magenta" }\n    ]}\n    data={[\n      { date: new Date("1980-01-01"), "Median Household Income": 22000, "College Tuition": 3000 },\n      { date: new Date("1990-01-01"), "Median Household Income": 30000, "College Tuition": 6000 },\n      { date: new Date("2000-01-01"), "Median Household Income": 42000, "College Tuition": 10000 },\n      { date: new Date("2010-01-01"), "Median Household Income": 49000, "College Tuition": 18000 },\n      { date: new Date("2020-01-01"), "Median Household Income": 53000, "College Tuition": 25000 }\n    ]}\n/>
```

----------------------------------------

TITLE: Adding Extra Features to CodeBlock (TSX/JavaScript)
DESCRIPTION: This example showcases how to enable additional interactive features for the `CodeBlock` component using boolean props such as `fullscreenButton`, `styleButton`, and `reloadButton`. Setting these props to `true` adds corresponding buttons to the component's interface. The inner JavaScript code is a simple sequence of operations: fetching data, logging a message, and rendering results.
SOURCE: https://github.com/once-ui-system/mcp/blob/main/content/once-ui/modules/codeBlock.mdx#_snippet_3

LANGUAGE: tsx
CODE:
```
<CodeBlock
		fullscreenButton
		styleButton
		reloadButton
		codes={[
			{
				code:
"const data = fetchData();
console.log('Processing data...');
renderResults(data);",
				language: "javascript",
				label: "Extras"
			}
		]}
/>
```

LANGUAGE: javascript
CODE:
```
const data = fetchData();
console.log('Processing data...');
renderResults(data);
```

----------------------------------------

TITLE: AvatarGroup with Mixed Avatar Types (TSX)
DESCRIPTION: Demonstrat