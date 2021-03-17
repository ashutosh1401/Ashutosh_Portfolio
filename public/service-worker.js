/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["404.html","0a27a4163254fc8fce870c8cc3a3f94f"],["img/briefcase.png","47892dc5f18f0099ae03d5d2f7a52353"],["img/intro.webp","3948ed367e5e82b78418ae9e3bd34253"],["img/parallax1.jpg","58e2aaff0822a0b6bac3a093fa3720f8"],["img/parallax2.jpg","9f025a91dc0e9bc2023b379fe4282a69"],["img/parallax3.webp","9475960ac9c797fe3fbc082acfc879de"],["img/parallax4.webp","01b968c0865c8a4bdbbb9041c45bcd75"],["img/parallax5.webp","78b812847f8b78fc4cfbd6f50ac2c655"],["img/profile.webp","cb21087c51f95a93da118d81b5b6d778"],["index.html","0b6c3217a182487205eebe788cb16330"],["manifest.json","aeefe11aecb833c93ff299c858d08573"],["node_modules/materialize-css/CHANGELOG.md","7a2399459dec783d62be76f024f553f0"],["node_modules/materialize-css/Gruntfile.js","fbfe8129a6076d02c566012d6da010fc"],["node_modules/materialize-css/README.md","dfaca46ba38a5a530ef3d54a7e14888a"],["node_modules/materialize-css/dist/css/materialize.css","fdbb1e460c9c2e14d8775d5f73ccd9ca"],["node_modules/materialize-css/dist/css/materialize.min.css","92b1c999ee8f5d5f74a8827bcf8e0d6e"],["node_modules/materialize-css/dist/js/materialize.js","8c1e812a2f67e530cee708ac75b3ed19"],["node_modules/materialize-css/dist/js/materialize.min.js","1adbb8318f43c2e92436bce42a9b4876"],["node_modules/materialize-css/extras/noUiSlider/nouislider.css","d13265c661ab44f09d4dd6dd1421e920"],["node_modules/materialize-css/extras/noUiSlider/nouislider.js","e439b57778d51b7c755b85065ad687cb"],["node_modules/materialize-css/extras/noUiSlider/nouislider.min.js","c0f2166d47d7948cfe7b1a057916d4f7"],["node_modules/materialize-css/js/anime.min.js","77f455fb77c824af16ab1f026a7e7506"],["node_modules/materialize-css/js/autocomplete.js","a64102cf84fe78bac22f8f2cccdcef88"],["node_modules/materialize-css/js/buttons.js","2bbf0a34ca5ed3a984f1043f478418d4"],["node_modules/materialize-css/js/cards.js","fb11098f90c46ee12178e44c5a399709"],["node_modules/materialize-css/js/carousel.js","3045006031749e9e197f93627447fd80"],["node_modules/materialize-css/js/cash.js","0cfd9338320eaf4843b6ff6754952330"],["node_modules/materialize-css/js/characterCounter.js","b0fcc07c6c0eb742da34c36adb40e608"],["node_modules/materialize-css/js/chips.js","5feae809fd7dafdacd25061874e81421"],["node_modules/materialize-css/js/collapsible.js","6c88bff399da046e884568ee18965e10"],["node_modules/materialize-css/js/component.js","a89f81777ed109fb13b8c408c80a3017"],["node_modules/materialize-css/js/datepicker.js","f41d77a61ff9fe3ee38ae6172cf12108"],["node_modules/materialize-css/js/dropdown.js","0fce72434a23a9f99feb088a4d13d712"],["node_modules/materialize-css/js/forms.js","63d21830c7933b4723d11ea838604f5b"],["node_modules/materialize-css/js/global.js","82348c1422ce959420b0f682d6d94dfb"],["node_modules/materialize-css/js/materialbox.js","489594635f6e1f7c672b5dc681487aeb"],["node_modules/materialize-css/js/modal.js","6be285a1dc98ef2a9339b252bdbd47cb"],["node_modules/materialize-css/js/parallax.js","4d922092b050d7b8ed544b14473d7170"],["node_modules/materialize-css/js/pushpin.js","38c77e82497f07a8ab97ce3f214c85d5"],["node_modules/materialize-css/js/range.js","4b6ca7c64563ec8132a23846a493e13a"],["node_modules/materialize-css/js/scrollspy.js","bdb91811c6f15986cd92b5d230afaee3"],["node_modules/materialize-css/js/select.js","3dd646f93678c77f62aabf17755e7e0d"],["node_modules/materialize-css/js/sidenav.js","be5e5adfafebcbc724e3499978f6bd21"],["node_modules/materialize-css/js/slider.js","d0e2223cd7f3a0cbbb60fb1c5b862e5d"],["node_modules/materialize-css/js/tabs.js","db26f8c739dc979f8d7f3ca332857e50"],["node_modules/materialize-css/js/tapTarget.js","8991a596a3ed88ec3d4fbc57c385a7f5"],["node_modules/materialize-css/js/timepicker.js","684c95298de4d2231725e1a84d8d0659"],["node_modules/materialize-css/js/toasts.js","b281cf1dcdeec1ad50dfedfa0c206f86"],["node_modules/materialize-css/js/tooltip.js","63e5b61bbe49eaef1cb2673ee2105e27"],["node_modules/materialize-css/js/waves.js","c305aa05adf4b0772eb2b8576f8d3692"],["node_modules/materialize-css/package.json","737a20c3f8982a8a23744c692ed5b2af"],["node_modules/materialize-css/sass/components/_badges.scss","8dd87a12ca73b17bd643613fa927cd9c"],["node_modules/materialize-css/sass/components/_buttons.scss","b0d9fb0c9404ac63af9a17d14c849d55"],["node_modules/materialize-css/sass/components/_cards.scss","3b5c386641a469f7a42352e4d430e929"],["node_modules/materialize-css/sass/components/_carousel.scss","1141298a5e1ab3367b113ad53c83ccea"],["node_modules/materialize-css/sass/components/_chips.scss","9c8e54698b969e3adbf34946e5baeb40"],["node_modules/materialize-css/sass/components/_collapsible.scss","f5fc5233244ed8806d4248bae646cb90"],["node_modules/materialize-css/sass/components/_color-classes.scss","cd23824679684ca51598c67883451fe7"],["node_modules/materialize-css/sass/components/_color-variables.scss","9c089ac3a3df8b25251b74b4d8c48f12"],["node_modules/materialize-css/sass/components/_datepicker.scss","746d2759d1a2fc901613ebba874ec561"],["node_modules/materialize-css/sass/components/_dropdown.scss","9610d33df29bd63ab5d94db65fabe06a"],["node_modules/materialize-css/sass/components/_global.scss","fdf3d7eb0cf75a0cc724a60282ac1472"],["node_modules/materialize-css/sass/components/_grid.scss","d3eeadb820bf37ba3bd48de605ded89b"],["node_modules/materialize-css/sass/components/_icons-material-design.scss","7f548f65426d8b7df666b4feae8f47fd"],["node_modules/materialize-css/sass/components/_materialbox.scss","f382cf440739591462ec5a11c2590f86"],["node_modules/materialize-css/sass/components/_modal.scss","eed224d2ce53e3d15e326126436371d3"],["node_modules/materialize-css/sass/components/_navbar.scss","973a3c3c3c353a095d65f0f3c539123e"],["node_modules/materialize-css/sass/components/_normalize.scss","8c6eee6b2107ef25dc486020ced13898"],["node_modules/materialize-css/sass/components/_preloader.scss","02bff31b510027bbc82ac28e8d3b5e5b"],["node_modules/materialize-css/sass/components/_pulse.scss","b547abb5df21828f6748a1aa903b407d"],["node_modules/materialize-css/sass/components/_sidenav.scss","2471f22c4128c40cd77f68b235e4259c"],["node_modules/materialize-css/sass/components/_slider.scss","e9975847b5051eacb657fbe68858d020"],["node_modules/materialize-css/sass/components/_table_of_contents.scss","cdc42bc2c0d46fb9dd604570f3375931"],["node_modules/materialize-css/sass/components/_tabs.scss","b00e3ca977f63d1e05987160fa2c3399"],["node_modules/materialize-css/sass/components/_tapTarget.scss","bb22ba2fc88fc2ffc64bfeb283da2e61"],["node_modules/materialize-css/sass/components/_timepicker.scss","3d0ed2ac38d0d0ffe6ff2cdbd22c1428"],["node_modules/materialize-css/sass/components/_toast.scss","21d485c3b06f705aaacde055154e8112"],["node_modules/materialize-css/sass/components/_tooltip.scss","c0699ec9725f1ace1d431876d8ba0241"],["node_modules/materialize-css/sass/components/_transitions.scss","cdc0c87c65cff7fffabbb63bc37e8dfb"],["node_modules/materialize-css/sass/components/_typography.scss","965d9d8391c5d590e7d5ac21b20b1654"],["node_modules/materialize-css/sass/components/_variables.scss","b9fd2ee2248f0b7256267db8a4b3f4cf"],["node_modules/materialize-css/sass/components/_waves.scss","a74750fbfa54a9950abbd753f2604775"],["node_modules/materialize-css/sass/components/forms/_checkboxes.scss","deeecae70049ec3b6aa7951e1b20a4af"],["node_modules/materialize-css/sass/components/forms/_file-input.scss","98a89343de02a1873ad6120353462fa3"],["node_modules/materialize-css/sass/components/forms/_forms.scss","ea5dad4739ed6f6570f21a05c4c91b98"],["node_modules/materialize-css/sass/components/forms/_input-fields.scss","c90f42845f30b18e7cfef6da3ab0d354"],["node_modules/materialize-css/sass/components/forms/_radio-buttons.scss","90a973058a59bdcbef28fc59432dd9e0"],["node_modules/materialize-css/sass/components/forms/_range.scss","c2ae19d23343877470921888c0d65fb8"],["node_modules/materialize-css/sass/components/forms/_select.scss","bf58e51341f4d4a1035084b6117a7b5c"],["node_modules/materialize-css/sass/components/forms/_switches.scss","aa89251ae4bf37c97edd0892b5ad5e36"],["node_modules/materialize-css/sass/materialize.scss","2e05b1b93a0d0e36d434ad5216551ba7"],["package-lock.json","508befd5388163bc4e5d69942c0dea67"],["styles.css","a1469aaac908fcec49011be0f37879d8"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







