// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  socketUrl : 'http://localhost:4000',
  apiUrl : 'http://office.theconversiongroup.com.au/api/Jobambtrackings?filter[where][logintime][gt]=2018-06-04'
};
// http://office.theconversiongroup.com.au/api/containers/ambUploads/download/signin_242_948_682_2890_1527291547001.jpg
// apiUrl+"/containers/ambphotos/download/"+photo.path