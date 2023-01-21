import {series,parallel} from 'gulp';
import {run} from './utils'
const withTashName=(name:string,fn) => Object.assign(fn,{displayName:name})
export default series(
    withTashName('task1', function task1(run) {
        console.log('task1');
        run('touch indx.js')
    }),
    // withTashName('run',run('rm -rf ./dist'))
)