using Pkg
cd("..")
Pkg.develop(PackageSpec(path=pwd()))
Pkg.instantiate()
cd("docs/")
include("make.jl")