"use strict";
const NexusClient = require("grindery-nexus-client").default;

const getAccessToken = (z, bundle) => {
  const promise = z.request("https://orchestrator.grindery.org/oauth/token", {
    method: "POST",
    body: {
      code: bundle.inputData.code,
      grant_type: "authorization_code",
    },
    headers: {
      "content-type": "application/x-www-form-urlencoded",
    },
  });

  return promise.then((response) => {
    if (response.status !== 200) {
      throw new Error("Unable to fetch access token: " + response.content);
    }

    const result = JSON.parse(response.content);
    return {
      access_token: result.access_token,
      refresh_token: result.refresh_token,
      expires_in: result.expires_in,
    };
  });
};

const refreshAccessToken = (z, bundle) => {
  const promise = z.request("https://orchestrator.grindery.org/oauth/token", {
    method: "POST",
    body: {
      refresh_token: bundle.authData.refresh_token,
      grant_type: "refresh_token",
    },
    headers: {
      "content-type": "application/x-www-form-urlencoded",
    },
  });

  return promise.then((response) => {
    if (response.status !== 200) {
      throw new Error("Unable to fetch access token: " + response.content);
    }

    const result = JSON.parse(response.content);
    return {
      access_token: result.access_token,
    };
  });
};

const testAuth = async (z, bundle) => {
  const client = new NexusClient(bundle.authData.access_token);
  let workflows;
  try {
    workflows = await client.workflow.list({});
  } catch (error) {
    throw new z.errors.RefreshAuthError();
  }
  const user = client.user.get();
  if (user) {
    return { id: user.address_short };
  } else {
    throw new Error("The access token you supplied is not valid");
  }
};

module.exports = {
  config: {
    type: "oauth2",
    test: testAuth,
    oauth2Config: {
      authorizeUrl: {
        method: "GET",
        url: `https://orchestrator.grindery.org/oauth/authorize`,
        params: {
          response_type: "code",
          redirect_uri: "{{bundle.inputData.redirect_uri}}",
          utm_source: "zapier-safe-app",
        },
      },
      getAccessToken: getAccessToken,
      refreshAccessToken: refreshAccessToken,
      autoRefresh: true,
    },
    fields: [],
    connectionLabel: "{{id}}",
  },
  befores: [],
  afters: [],
};
