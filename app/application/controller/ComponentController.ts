import { inject, injectable } from 'tsyringe'
import { ComponentRepository } from '~/application/repository/ComponentRepository'
import { ComponentTypeRepository } from '~/application/repository/ComponentTypeRepository'
import { PageRepository } from '~/application/repository/PageRepository'


@injectable()
export class ComponentController {

  constructor(
    @inject('PageRepository') private pageRepo: PageRepository,
    @inject('ItemRepository') private itemRepo: ComponentRepository,
    @inject('ComponentTypeRepository') private componentTypeRepo: ComponentTypeRepository
  ) {
  }

}