from swagger_server.database import find_variants_by_gene, find_genes_by_gene_prefix

def get_variant(gene=None):
    """function that finds all variants for a particular gene

       Args:
           gene: The gene we are going to look for variants on

       Returns:
           A dictionary with all the variants on a particular gene

       """
    df = find_variants_by_gene(gene=gene)
    return df.to_dict(orient="records")

def get_gene(gene_prefix=None):
    """function that finds all genes that start with a prefix

       Args:
           gene_prefix: Will find all genes starting with this gene_prefix

       Returns:
           A list with all the genes that start the with gene_prefix

       """
    series = find_genes_by_gene_prefix(gene_prefix=gene_prefix)
    return series.to_list()
