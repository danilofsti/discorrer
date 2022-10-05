import { read, exclude, create, edit } from './httpService';

export async function apiGetAllRuns() {
  const allRuns = await read('/run');
  return allRuns;
}

export async function apiCreateRun(run) {
  const newRun = await create('/run', JSON.parse(run))
  return newRun;
}

export async function apiUpdateRun(run) {
  const updatedRun = await edit('/run', JSON.parse(run))
  return updatedRun;
}
