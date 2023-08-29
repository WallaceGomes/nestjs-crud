import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from '../entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductRepositoryAdapter {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
  ) {}

  async create(product: Partial<ProductEntity>): Promise<ProductEntity> {
    const productCreated = this.productRepository.create(product);

    return await this.productRepository.save(productCreated);
  }

  async update(
    id: number,
    product: Partial<ProductEntity>,
  ): Promise<ProductEntity> {
    const productToUpdate = await this.productRepository.findOne({
      where: { id },
    });

    return (
      await this,
      this.productRepository.save({
        ...productToUpdate,
        ...product,
      })
    );
  }

  async findAll(): Promise<ProductEntity[]> {
    return await this.productRepository.find();
  }

  async remove(id: number): Promise<void> {
    await this.productRepository.delete(id);
  }
}
