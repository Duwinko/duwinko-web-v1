import sanityClient from "@sanity/client";
export default sanityClient({
  projectId: "bguz4v1y",
  dataset: "production",
  apiVersion: "2022-09-26", // use current UTC date - see "specifying API version"!
  token:
    "skz3zxdk8nIeNnCthmGRvMcheW0r8L6ZgUSzpEBPlgxp9aUEdNwhmhiqYTRWXqCS7z7QqguPcNW92jaPfWWwr7OxOviY1cYawjcwTVJ84Rl6YkJUV0cuENfOXDGXI10yFlEg95yDxUD2tzYF7eLMt5q3RXzFPhjQ7MJ5rrDSNUhmrBeC8fi2", // or leave blank for unauthenticated usage
  useCdn: true, // `false` if you want to ensure fresh data
});
