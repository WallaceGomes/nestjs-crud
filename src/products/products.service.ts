import { Injectable, Inject } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductRepositoryAdapter } from './infra/productRepository.adapter';

@Injectable()
export class ProductsService {
  constructor(
    @Inject(ProductRepositoryAdapter)
    private readonly productRepositoryAdapter: ProductRepositoryAdapter,
  ) {}

  create(createProductDto: CreateProductDto) {
    return this.productRepositoryAdapter.create(createProductDto);
  }

  findAll() {
    return this.productRepositoryAdapter.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return this.productRepositoryAdapter.update(id, updateProductDto);
  }

  remove(id: number) {
    return this.productRepositoryAdapter.remove(id);
  }
}
