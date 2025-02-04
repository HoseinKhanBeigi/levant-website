exports.createPages = async ({ actions }) => {
  const { createRedirect } = actions;

  // Redirects for product pages
  createRedirect({
    fromPath: `/levantSuite`,
    toPath: `/products/levantSuite`,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/levantSuite/`,
    toPath: `/products/levantSuite/`,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/neshan`,
    toPath: `/products/neshan`,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/shiva`,
    toPath: `/products/shiva`,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/siva`,
    toPath: `/products/siva`,
    isPermanent: true,
  });
  createRedirect({
    fromPath: `/products/ai-services`,
    toPath: `/web-services/ai-services`,
    isPermanent: true,
  });

  // ✅ Prevent API redirect issues
  createRedirect({
    fromPath: "/api/send-email",
    toPath: "/api/send-email",
    statusCode: 200, // Ensure the API does not get redirected
    isPermanent: false,
  });

  createRedirect({
    fromPath: "/api/*",
    toPath: "/api/:splat",
    statusCode: 200, // Allow all API routes to work properly
    isPermanent: false,
  });
};

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-leaflet|leaflet/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};
