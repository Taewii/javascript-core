function validateRequest(request) {
  const validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
  const validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
  const uriRegex = /^[\w.]+$/g;
  const messageRegex = /^[^<>\\&'"]+$/g;
  
  if (!request.method || !validMethods.includes(request.method)) {
    throw Error('Invalid request header: Invalid Method');
  }
  
  if (!request.uri || !uriRegex.test(request.uri)) {
    throw Error('Invalid request header: Invalid URI');
  }
  
  if (!request.version || !validVersions.includes(request.version)) {
    throw Error('Invalid request header: Invalid Version');
  }
  
  if (request.message === undefined || (request.message !== '' && !messageRegex.test(request.message))) {
    throw Error('Invalid request header: Invalid Message');
  }
  
  return request;
}

console.log(validateRequest({
  method: 'GET',
  uri: 'svn.public.catalog',
  version: 'HTTP/1.1',
  message: ''
}));

console.log(validateRequest({
  method: 'OPTIONS',
  uri: 'git.master',
  version: 'HTTP/1.1',
  message: '-recursive'
}));

console.log(validateRequest({
  method: 'POST',
  uri: 'home.bash',
  message: 'rm -rf /*'
}));


