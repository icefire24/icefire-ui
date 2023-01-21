import {spawn}  from 'child_process';
import {projectRoot} from './path'
export const run = async (commnad: string) => {
    return new Promise((resolve, reject) => {
        const [cmd, ...args] = commnad.split(' ')
        const proc = spawn(cmd, args, {
            cwd: projectRoot,
            shell: true,
            stdio: 'inherit'
        })
        proc.on('close', resolve)
        }
    )
}