#!/bin/bash

if [[ "$VERCEL_GIT_COMMIT_REF" == "master" ]] ; then
  # Proceed with the build
    echo "✅ - Build can proceed"
  exit 1;
else
  # Don't build
  echo "🛑 - Build canceled"
  exit 0;
fi
