import { TAgent, IPluginMethodMap } from 'daf-core'
import { createObjects } from './objectCreator'

export function createAgentFromConfig<T extends IPluginMethodMap>(config: object): TAgent<T> {
  //@ts-ignore
  const { agent } = createObjects(config, { agent: '/agent' })
  return agent
}
