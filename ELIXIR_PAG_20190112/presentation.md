name: title_slide
layout: true
class: right, middle

background-image: url("images/ELIXIR_background.png")
background-position: top
background-repeat: no-repeat
background-size: contain

<div style="height:250px"></div>

<img src="images/ELIXIR_logo_white_background.png" height="8%" style="position:absolute;left:2%;bottom:2%;" />

---
layout: true
name: galaxy_slide

background-color: #2c3143

---

layout: true

<img src="images/ELIXIR_logo_white_background.png" height="8%" style="position:absolute;left:2%;bottom:2%;" />

---
template: title_slide

## ELIXIR Resources for Interoperability

### Frederik Coppens

#### PAGXXVII Session
#### Interoperability and Federation Across Bioinformatic Platforms and Resources

.italic[www.elixir-europe.org/excelerate]

<img src="images/excelerate.png" height="8%" style="position:absolute;left:11%;bottom:2%;" />
<img src="images/europe.png" height="8%" style="position:absolute;left:1%;bottom:2%;" />

<p style="position:absolute;left:28%;right:2%;bottom:2%;font-size:50%;text-align:left">
ELIXIR-EXCELERATE is funded by the European Commission within the Research Infrastructures programme of H2020, grant agreement number 676559. The  sole  responsibility  for  the  content  of  this  presentation  lies  with  ELIXIR.  It  does  not  necessarily  reflect  the  opinion  of  the  European  Union and the European Commission is not responsible for any use than may be made of the information contained therein.

</p>

???

https://plan.core-apps.com/pag_2019/abstract/8d1a2a44-8bdc-42f3-90ab-90637edc71cf
https://plan.core-apps.com/pag_2019/event/9441a7255c56cf0ce04b90bfc408a9f3
[https://frederikcoppens.github.io/slidedecks/](https://frederikcoppens.github.io/slidedecks/)

January 12 @ 10h30, 16 minutes

---

# Outline

### ELIXIR

### ELIXIR Services

### ELIXIR Plant Community

### ELIXIR Tools & Workflows

---
template: title_slide

# ELIXIR

# European infrastructure for biological information

---
class: center, middle

# Data infrastructure for Europe’s life-science research

![:scale 66%](images/ELIXIR_overview_extended.png)

???

ELIXIR is an intergovernmental organisation that brings together life science resources from across Europe. These resources include databases, software tools, training materials, cloud storage and supercomputers.

The goal of ELIXIR is to coordinate these resources so that they form a single infrastructure. This infrastructure makes it easier for scientists to find and share data, exchange expertise, and agree on best practices. Ultimately, it will help them gain new insights into how living organisms work.

---

class: center, middle

# European & beyond

<img src="images/ELIXIR_members.png" style="height:400px;" />

Building collaborations with US, Canada, Australia, ...

---
template: title_slide

# ELIXIR Services

---
class: center, middle

# ELIXIR Services

<img src="images/ELIXIR_services.png" style="height:400px;" />

---

# Deposition Databases for Biomolecular Data

<span></span> | <span></span>
---- | ----
ArrayExpress | Functional genomics data
BioModels	| Computational models of biological processes
EGA	| Genetic and phenotypic data from biomedical research projects
ENA | Nucleotide sequence information
IntAct	| Molecular interaction data
MetaboLights	| Experimental metabolomics data
PDBe	| Biological macromolecular structures
PRIDE	| Mass spectrometry-based proteomics data

https://www.elixir-europe.org/platforms/data/elixir-deposition-databases

---

# ELIXIR Core Data Resources

#### Fundamental importance to the wider life-science community
#### Long-term preservation of biological information
#### Ensure sustainability

Examples:

  - Deposition Databases
  - Europe PubMed Central
  - Human Protein Atlas
  - Uniprot

https://www.elixir-europe.org/platforms/data/core-data-resources

---

# BioSchemas.org

* .highlight[Schema.org] semantic markup of webpages
* collection of specifications that provide guidelines for markup within life sciences
* Generic service as part of the European Open Science Cloud

.center[<img src="images/BioSchemas.png" style="height:400px;" />]

---

# BioSchemas.org

.center[<img src="images/BioSchemas_applepie.png" style="height:400px;" />]

---
template: title_slide

# ELIXIR Plant Community

Leads: Cyril Pommier & Célia Miguel

---

# Phenotyping platforms @ VIB

.center[![:scale 70%](images/wiwam_robots.png)

[www.wiwam.com](https://www.wiwam.com)
]
---

# Plant Phenotyping Data management

.center[
![:scale 70%](images/wiwam_pippa.png)

Similar platforms at INRA (FR), WUR (NL), IPK (GE), NIB (SI)
]

---
class: center, middle

# ELIXIR Plant Community

![:scale 100%](images/elixir-plant.png)

---
class: center, middle

# ELIXIR Plant Community

![:scale 40%](images/miappe.png)

![:scale 40%](images/brapi.png)

### Building on and with international consortia

### BrAPI @ PAG : Genotyping data structures

### Sunday January 13th @ 1PM Crescent room

???

---
template: title_slide

# ELIXIR Belgium

# VIB Plant Resources

---

![:scale 100%](images/orcae_screenshot.png)

???

Sterck et al. 2012,  Nature Methods,9:1041

Online annotation (curation) system with database support.
Wiki-style approach: each modification is traceable.
Regulate update and synchronize the data.
Export the annotation into desired format.
Very well suited for browsing and querying data
Blast, keyword searches, AnnoJ genome browser
Both functional as structural info can be edited
Functional (eg. Gene description, go-terms,…) is done via webform
Structural modifications are done via integrated visualisation software (eg. GenomeView)
Currently mainly for genomic data

---
class: center

# PLAZA

![:scale 95%](images/plaza-v4.png)

[plaza.psb.ugent.be](https://plaza.psb.ugent.be)

???

Cloud version
New version in 2019

---
template: title_slide

# ELIXIR Tools & Workflows

---
class: center,middle

# Tools & Services Registry


.center[![:scale 100%](images/biotools.png)]

[bio.tools](https://bio.tools)

???

---
class: center,middle

# Software deployment


.center[<img src="images/BioContainers.png" style="height:350px;" />]

.center[<img src="images/bioconda.png" style="height:70px;" />]

[biocontainers.pro](https://biocontainers.pro/)

---
class: center,middle

# Workflows

![:scale 70%](images/4_list_paired_collection_workflow.png)

<div style="display:block;float:center">
<img src="images/cwl.png"  style="height:150px;vertical-align:middle;padding-right:20px;padding-bottom:10px" />

<img src="images/myexperiment.png"  style="height:50px;vertical-align:middle;padding-right:20px;padding-bottom:10px" />
</div>

---
class: center, middle

# Galaxy

![:scale 90%](images/Galaxy.png)

[usegalaxy.org](https://usegalaxy.org)
[usegalaxy.eu](https://usegalaxy.eu)

#### An Open Platform for Data Analysis and Integration

---
class: center, middle

# ELIXIR Galaxy Community

![:scale 50%](images/Galaxy_overview.png)

Leads: Björn Grüning, Gildas Le Corguillé, Frederik Coppens

### PAGXXVII Session on Galaxy

### Tuesday January 15th @ 4PM, California

???

* A European network of Galaxy communities
* Visualisation in Galaxy
* Galaxy cloud infrastructure across Europe
* Data access & integration in Galaxy
* Bringing Tools and Data together
* Training
* FAIR and Galaxy

https://plan.core-apps.com/pag_2019/event/9441a7255c56cf0ce04b90bfc40d5302)
https://plan.core-apps.com/pag_2019/abstract/bd1ddd10-af82-4bca-84c0-ff8fe7c5c46a

---
class: center, middle

![:scale 50%](images/ELIXIR_BELGIUM_white_background.png)


![:scale 20%](images/excelerate.png)
![:scale 20%](images/FWO_Logo_Kleur.jpg)
![:scale 20%](images/ewi.png)
![:scale 20%](images/vib_tagline_pos_rgb.png)

### 5 ELIXIR Belgium vacancies open next week

[www.vib.be/jobs](http://www.vib.be/jobs)
