import { PrismaService } from 'src/prisma/prisma.service';
import { Article, ArticleCreateInput, ArticleUpdateInput } from 'src/types';

export class ArticalService {
  constructor(private prismaService: PrismaService) {}

  async query(): Promise<Article[]> {
    const res = await this.prismaService.article.findMany();
    return res;
  }

  async creeate(createInput: ArticleCreateInput): Promise<Article> {
    const res = await this.prismaService.article.create({ data: createInput });
    return res;
  }

  async update(updateInput: ArticleUpdateInput): Promise<Article> {
    const res = await this.prismaService.article.update({
      data: updateInput,
      where: {
        id: updateInput.id,
      },
    });
    return res;
  }
}
