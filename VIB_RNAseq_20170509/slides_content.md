
# Platforms

---Slide---

# Platforms

##Short (few hundred bases)

<img src='images/logos/illumina.jpg' width=30% alt='Illumina' id='figure_plain'></img>
<!--
<img src='images/logos/Thermo_Fisher_Scientific_logo.png' width=30% alt='Thermo Fisher' id='figure_plain'></img>
-->

##Long reads (multiple kilobases)
<img src='images/logos/logo_pacbio.jpg' width=30% alt='Pacific Biosciences' id='figure_plain'></img>
<img src='images/logos/oxford.png' width=30% alt='Oxford Nanopore' id='figure_plain'></img>

---Slide---

# What is your biological question ?

---Section---

# Applications

---Slide---

# Applications

<div id='left'>
<h2>Quantification</h2>
<ul>
  <li>gene expression</li>
  <li>targeted gene expression</li>
  <li>non-coding RNA</li>
  <li>small RNA</li>
</ul>
<h2 class="fragment" data-fragment-index="1" style='color:var(--vib-green)'>Known features</h2>
</div>

<div id='right'>
<h2>RNA content</h2>
<ul>
  <li>*de novo* transcriptome assembly</li>
  <li>whole transcripts</li>
  <li>single cell RNA-seq</li>
</ul>
<h2 class="fragment" data-fragment-index="1" style='color:var(--vib-green)'>Discovery</h2>
</div>

<!--
Quantification - RNA content - isoform characterization - gene fusion
-->

---Slide---

<span id="item-block-content"> Library prep </span>
<span id="item-block-content"> Sequencing </span>
<span id="item-block-content"> Analysis </span>

---Section---

# Quantification

---Slide---

# Quantification

* Select for features in library preparation
* High coverage per feature
* Assign read to a feature

---Slide---

# Quantification

<img src='images/logos/illumina.jpg' width=30% alt='Illumina' id='figure_plain'></img>

* Single reads versus Paired-End
* Read length: from 50 to 600 bases
* Stranded
* Coverage

---Slide---

## Library preparation

* RNA extraction
* Selection e.g. poly-A
* Fragmentation e.g. 250 nt
* Random primed cDNA synthesis
* Adapter ligation & PCR amplification

---Slide---

## Single read versus Paired-End

<img src='images/paired.jpg' width=70% alt='Paired-End' id='figure_plain'></img>

---Slide---

## Longer & Paired reads increases

* mapping specificity
* unique mapping
* quantification accuracy

<div class='fragment'>
</br>
<ul>
<li>Good quality reference genome: <span style='color:var(--vib-green)'>Short Single reads</span></li>
<li>Low quality or repetitive rich : <span style='color:var(--vib-green)'>Long Paired-End reads</span></li>
</ul>
</div>
---Slide---

## Strandedness

* *Original* non-stranded protocol
* Stranded now standard
* Most common protocol d-UTP based: reverse complement
  * Reverse
  * First strand
  * Template
  * Anti-sense

---Slide---

## Coverage

<img src='images/scatter_htseq_array_red35.png' width=60% alt='Paired-End' id='figure_plain'></img>

---Slide---

## Coverage

<img src='images/scatter_htseq_array_red20.png' width=60% alt='Paired-End' id='figure_plain'></img></br>

---Slide---

## Coverage

<img src='images/scatter_htseq_array_red10.png' width=60% alt='Paired-End' id='figure_plain'></img>

---Slide---

## Coverage

<img src='images/scatter_htseq_array_red5.png' width=60% alt='Paired-End' id='figure_plain'></img>

---Slide---

## Coverage

For expression quantification 20 million fragments is sufficient : 20K expressed genes at average 1000 counts

<img src='images/scatter_htseq_array_red35.png' width=20% alt='Paired-End' id='figure_plain'></img>
<img src='images/scatter_htseq_array_red20.png' width=20% alt='Paired-End' id='figure_plain'></img>
<img src='images/scatter_htseq_array_red10.png' width=20% alt='Paired-End' id='figure_plain'></img>
<img src='images/scatter_htseq_array_red5.png' width=20% alt='Paired-End' id='figure_plain'></img>

---Slide---

## Low expressed genes ?

<img src='images/RNAseq_precision.png' width=50% alt='Precision' id='figure_plain'></img>


[Bioinformatics. 2011;27(13):i383-i391](https://dx.doi.org/10.1093/bioinformatics/btr247)

---Slide---

## Low expressed genes ?

<img src='images/RNAseq_readdepth.png' width=50% alt='Read depth' id='figure_plain'></img>


[Bioinformatics. 2011;27(13):i383-i391](https://dx.doi.org/10.1093/bioinformatics/btr247)

---Slide---


# Targeted expression profiling

* In essence : microarray + RNA-seq

---Slide---
