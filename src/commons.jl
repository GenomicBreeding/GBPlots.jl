abstract type PlotsGB end

mutable struct DistributionPlots <: PlotsGB
    labels::Vector{String}
    plots::Vector{CairoMakie.Figure}
end

mutable struct ViolinPlots <: PlotsGB
    labels::Vector{String}
    plots::Vector{CairoMakie.Figure}
end

mutable struct CorHeatPlots <: PlotsGB
    labels::Vector{String}
    plots::Vector{CairoMakie.Figure}
end

mutable struct TreePlots <: PlotsGB
    labels::Vector{String}
    plots::Vector{CairoMakie.Figure}
end

mutable struct BarPlots <: PlotsGB
    labels::Vector{String}
    plots::Vector{CairoMakie.Figure}
end

mutable struct BoxPlots <: PlotsGB
    labels::Vector{String}
    plots::Vector{CairoMakie.Figure}
end

mutable struct PCBiPlots <: PlotsGB
    labels::Vector{String}
    plots::Vector{CairoMakie.Figure}
end

function GBCore.checkdims(x::PlotsGB)::Bool
    length(x.labels) == length(x.plots)
end

function labeltofname(; label::String, prefix::String, suffix::String)::String
    symbol_strings::Vector{String} = [" ", "\n", "\t", "(", ")", "&", "|", ":", "=", "+", "-", "*", "/", "%"]
    for s in symbol_strings
        label = replace(label, s => "_")
    end
    fname = join([prefix, label], "-") * "." * suffix
    repeat_strings = ["..", "__", "--", "_.", "._", "-.", ".-"]
    for s in repeat_strings
        fname = replace(fname, s => ".")
    end
    fname
end

function saveplots(
    plots::PlotsGB;
    idx::Vector{Int64} = [0],
    format::String = "svg",
    prefix::String = "",
    use_labels::Bool = true,
    overwrite::Bool = false,
)::Vector{String}
    # phenomes = Phenomes(n=10, t=3); phenomes.entries = string.("entry_", 1:10); phenomes.populations .= "pop_1"; phenomes.traits = ["A", "B", "C"]; phenomes.phenotypes = rand(10,3);
    # plots = GBPlots.plot(DistributionPlots, phenomes); idx = [1, 3, 5]; format = "svg"; prefix = ""; use_labels = false;
    # Check arguments
    if !checkdims(plots)
        throw(ArgumentError("The plots::DistributionPlots is corrupted."))
    end
    if idx == [0]
        idx = collect(1:length(plots.labels))
    end
    if (maximum(idx) > length(plots.labels)) || (minimum(idx) < 1)
        throw(ArgumentError("The provided indexes (idx) are out of bounds."))
    end
    if (format != "svg") && (format != "png") && (format != "pdf")
        throw(ArgumentError("we accept the following file formats: 'svg', 'png' and 'pdf'."))
    end
    if prefix == ""
        prefix = string(typeof(plots))
    end
    # Save the plots
    fnames = Vector{String}(undef, length(idx))
    for (i, j) in enumerate(idx)
        # i, j = 1, idx[1]
        if use_labels
            fnames[i] = labeltofname(label = plots.labels[j], prefix = prefix, suffix = format)
        else
            fnames[i] = labeltofname(label = string(i), prefix = prefix, suffix = format)
        end
        if isfile(fnames[i])
            if overwrite
                rm(fnames[i])
            else
                throw(ErrorException("Cannot overwrite exisiting file: `" * fnames[i] * "`."))
            end
        end
        CairoMakie.save(fnames[i], plots.plots[j])
    end
    fnames
end
