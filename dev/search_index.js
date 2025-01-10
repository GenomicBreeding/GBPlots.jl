var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"CurrentModule = GBPlots","category":"page"},{"location":"#GBPlots","page":"Home","title":"GBPlots","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for GBPlots.","category":"page"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [GBPlots]","category":"page"},{"location":"#GBPlots.plotstatic-Union{Tuple{T}, Tuple{Type{T}, GBCore.Phenomes}} where T<:CorHeatPlots","page":"Home","title":"GBPlots.plotstatic","text":"plotstatic(type::Type{T}, phenomes::Phenomes; color_scheme::Symbol=:YlGn)::T where {T<:CorHeatPlots}\n\nTrait correlation heatmaps across populations and per population\n\nExamples\n\nphenomes = Phenomes(n=100, t=3); phenomes.entries = string.(\"entry_\", 1:100); phenomes.populations = StatsBase.sample(string.(\"pop_\", 1:5), 100, replace=true); phenomes.traits = [\"A\", \"B\", \"C\"]; phenomes.phenotypes = rand(Distributions.MvNormal([1,2,3], LinearAlgebra.I), 100)'; phenomes.phenotypes[1, 1] = missing;\nx = plotstatic(CorHeatPlots, phenomes, color_scheme=:viridis)\nfnames = saveplots(x)\nrm.(fnames)\n\n\n\n\n\n","category":"method"},{"location":"#GBPlots.plotstatic-Union{Tuple{T}, Tuple{Type{T}, GBCore.Phenomes}} where T<:DistributionPlots","page":"Home","title":"GBPlots.plotstatic","text":"plotstatic(type::Type{T}, phenomes::Phenomes)::T where {T<:DistributionPlots}\n\nPlot distributions of each trait across populations and per population\n\nExamples\n\nphenomes = Phenomes(n=100, t=3); phenomes.entries = string.(\"entry_\", 1:100); phenomes.populations .= \"pop_1\"; phenomes.traits = [\"A\", \"B\", \"C\"]; phenomes.phenotypes = rand(Distributions.MvNormal([1,2,3], LinearAlgebra.I), 100)'; phenomes.phenotypes[1, 1] = missing;\nx = plotstatic(DistributionPlots, phenomes)\nfnames = saveplots(x)\nrm.(fnames)\n\n\n\n\n\n","category":"method"},{"location":"#GBPlots.plotstatic-Union{Tuple{T}, Tuple{Type{T}, GBCore.Phenomes}} where T<:TreePlots","page":"Home","title":"GBPlots.plotstatic","text":"plotstatic(type::Type{T}, phenomes::Phenomes; color_scheme::Symbol=:YlGn)::T where {T<:TreePlots}\n\nPlot tree diagrams showing the relationships of each entry using trait information.\n\nDistance metric: Euclidean\nGrouping/linkage: Ward's distance\nBranch order: Optimal (Bar-Joseph et al, 2001. Bionformatics.)\n\nExamples\n\nphenomes = Phenomes(n=100, t=3); phenomes.entries = string.(\"entry_\", 1:100); phenomes.traits = [\"A\", \"B\", \"C\"]; phenomes.phenotypes = rand(Distributions.MvNormal([1,2,3], LinearAlgebra.I), 100)'; \nΨ::Matrix{Float64} = phenomes.phenotypes;\ngroups = Clustering.kmeans(Ψ', 5);\nphenomes.populations = string.(\"pop_\", groups.assignments); \nphenomes.phenotypes[1, 1] = missing;\nx = plotstatic(TreePlots, phenomes)\nfnames = saveplots(x)\nrm.(fnames)\n\n\n\n\n\n","category":"method"},{"location":"#GBPlots.plotstatic-Union{Tuple{T}, Tuple{Type{T}, GBCore.Phenomes}} where T<:ViolinPlots","page":"Home","title":"GBPlots.plotstatic","text":"plotstatic(type::Type{T}, phenomes::Phenomes)::T where {T<:ViolinPlots}\n\nViolin plots across populations and per population across traits\n\nExamples\n\nphenomes = Phenomes(n=100, t=3); phenomes.entries = string.(\"entry_\", 1:100); phenomes.populations = StatsBase.sample(string.(\"pop_\", 1:5), 100, replace=true); phenomes.traits = [\"A\", \"B\", \"C\"]; phenomes.phenotypes = rand(Distributions.MvNormal([1,2,3], LinearAlgebra.I), 100)'; phenomes.phenotypes[1, 1] = missing;\nx = plotstatic(ViolinPlots, phenomes)\nfnames = saveplots(x)\nrm.(fnames)\n\n\n\n\n\n","category":"method"}]
}
