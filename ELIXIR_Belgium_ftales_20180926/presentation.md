
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

<img src="images/ELIXIR_logo_white_background.png" height="8%" style="position:absolute;left:2%;bottom:2%;" />

---
template: title_slide

## Data Management in Life-Sciences

### Frederik Coppens

#### f-TALES "Big Data in Life-Sciences and Biomedicine"
#### Gent, September 26, 2018

.italic[www.elixir-europe.org]
</br>
[https://frederikcoppens.github.io/slidedecks/](https://frederikcoppens.github.io/slidedecks/)

---

# Outline

### ELIXIR: European infrastructure for biological information

### ELIXIR Belgium

### Open Science, Open Data & Research Data Management

### ELIXIR Services: from an data management point of view

### The Open Science infrastructure puzzle

---

template: title_slide

# ELIXIR: European infrastructure for biological information

---

# European infrastructure for biological information

<span></span> | <span></span> | <span></span>
---- | ---- | ----
<img src="images/train.png" style="width:250px;" /> | .highlight[Domain specific Services] | ESFRIs
<img src="images/railroad.png" style="width:250px;" /> | Storage, Compute, Network | e-Infrastructures

???

People !

---
class: center, middle

# Data infrastructure for Europe’s life-science research

<img src="images/ELIXIR_overview.png" style="height:400px;" />

???

ELIXIR is an intergovernmental organisation that brings together life science resources from across Europe. These resources include databases, software tools, training materials, cloud storage and supercomputers.

The goal of ELIXIR is to coordinate these resources so that they form a single infrastructure. This infrastructure makes it easier for scientists to find and share data, exchange expertise, and agree on best practices. Ultimately, it will help them gain new insights into how living organisms work.

---
class: center, middle

# European-wide effort

<img src="images/ELIXIR_members.png" style="height:400px;" />

---

template: title_slide

# ELIXIR Belgium

---
class: center, middle

# Partners of ELIXIR Belgium

<img src="images/belgium.png" style="height:400px" />

---

class: center, middle

# Members of the lead institute

<img src="images/ElixirTeam_top.png" style="height:230px;" />

<span></span> | <span></span>
---- | ----
 Yves Van de Peer | Head of Node
 Frederik Coppens | deputy Head of Node & Technical Coordinator
 Kim De Ruyck | Coordinator ELIXIR Belgium
 Lieven Sterck | Technical Coordinator
 Alexander Botzki | Training Coordinator
 Paula Andrea Martinez | Trainer

---

class: center, middle

# Aim of ELIXIR Belgium

### .quote[ to ensure that Belgian researchers in life sciences can focus on their research question, rather than technical details of data, interoperability, compute resources, … by providing tailored solutions based on an interoperable infrastructure across Europe.]

---
template: title_slide

# Open Science, Open Data & Research Data Management

---
class: center, middle

# The theory

![:scale 100%](images/EC_how_it_works.jpg)

---
# Issues with the theory for researchers

* What should be in a Data Management Plan ?
* Gathering data ? What to gather ?
* What is metadata ? Never heard of...
* Which repository to choose ?
* How to deposit (large amounts of) data ?
* What is OpenAire ?

---
class: center, middle

# In practice

![:scale 100%](images/data_in_research.png)

---
template: title_slide

# ELIXIR Services

---
class: center, middle

# ELIXIR Services

<img src="images/ELIXIR_services.png" style="height:400px;" />

---

class: center, middle

# Data infrastructure for Europe’s life-science research

<img src="images/ELIXIR_overview.png" style="height:400px;" />

New Communities: Proteomics, Metabolomics, Galaxy

---

# FAIR Data Position Paper

1. .highlight[Open sharing of research data is a core principle] for publicly-funded research and ELIXIR encourages   all   funders   to   adopt   Open   Data   mandates.
2. .highlight[Data   Management   is   crucial]   part   of   good   scientific   practice   and   research   excellence.
3. Whenever possible, biological research data should be submitted to the recommended
community   .highlight[deposition   databases].
4. All data submitted to Open Data archives must be .highlight[annotated] in accordance with
.highlight[community-defined  standards].
5. .highlight[ELIXIR Nodes] are the national implementation of a harmonised FAIR Data Management
programme   for   the   life   sciences.
6. FAIR   data   management   requires   .highlight[professional   skills]   and   adequate   resources.
7. Good   research   data   management   requires   appropriate   .highlight[funding   for   data   infrastructures].

[https://www.elixir-europe.org/news/position-paper-fair-data-management](https://www.elixir-europe.org/news/position-paper-fair-data-management)

---

# Data Platform

### Deposition Databases for Biomolecular Data

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

# Data Platform

### ELIXIR Core Data Resources

#### Fundamental importance to the wider life-science community
#### Long-term preservation of biological information
#### Ensure sustainability

Examples:

* European Nucleotide Archive (ENA)
* Europe PubMed Central
* Human Protein Atlas

https://www.elixir-europe.org/platforms/data/core-data-resources

---


# Beacons

.highlight[Drive implementation of the Beacon technology within ELIXIR nodes]

<div style="display:block;float:right">
<img src="images/Beacon_countries.png"  style="height:300px;vertical-align:middle;padding-right:20px;padding-bottom:10px" />
</div>

ELIXIR Authentication and Authorisation Infrastructure

<span></span>  | <span></span>
---- | ----
<span style="color:green">Public</span> | Accessible to internet users
<span style="color:yellow">Registered</span>  | Accessible to bona fide researchers
<span style="color:red">Controlled</span>  | Authorized, signed agreement needed

<div style="display:block;position:absolute;bottom:10%;left:20%">
<img src="images/beacon.png"  style="height:50px;vertical-align:middle;padding-right:20px;padding-bottom:10px" />
<img src="images/ega.png"  style="height:50px;vertical-align:middle;padding-right:20px;padding-bottom:10px" />
<img src="images/ga4gh.png"  style="height:50px;vertical-align:middle;padding-right:20px;padding-bottom:10px" />
</div>
---

# Interoperability Platform

.quote[ELIXIR encourages the life science community to adopt standardised file formats, metadata, vocabularies and identifiers.]

#### FAIR principles

#### Metadata: annotation & ontologies

#### Value proposition: return on investment for stakeholder

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

# Training eSupport System

* Disseminate, discover & package training resources, training materials and events
* Aggregating information from ELIXIR nodes and 3rd-party content providers

<img src="images/ELIXIR_TeSS_logo.png" style="height:100px;vertical-align:middle;horizontal-align:right;margin-left:20px" />
<img src="images/ELIXIR_TeSS.png" style="height:250px;vertical-align:middle;" />

[https://tess.elixir-uk.org](https://tess.elixir-uk.org)

---

# FAIRsharing.org

(formerly BioSharing.org)

.center[<img src="images/FAIRsharing.png" style="height:400px;" />]


???

Ontology lookup service
Identifiers.org

---
class: center, middle

# In practice

![:scale 100%](images/data_in_research.png)

---
# Tools Platform

.quote[improve the discovery, quality and sustainability of software resources]

#### Tools and services registry
#### Scientific benchmark and technical monitoring
#### Software deployment
#### Workflows and workbenches
#### Software best practices

[Jiménez et al. Four simple recommendations to encourage best practices in research software. F1000Research 2017, 6:876](http://dx.doi.org/10.12688/f1000research.11407.1)

#### Tools interoperability (e.g. Common Workflow Language)

---

# Tools & Services Registry

https://bio.tools

.center[<img src="images/biotools.png" style="height:400px;" />]

???

---

# Workflows

![:scale 90%](images/4_list_paired_collection_workflow.png)

workflow registry  ![](images/myexperiment.png)

---

# Galaxy

https://usegalaxy.org

![:scale 100%](images/Galaxy.png)

---

# Galaxy @ VSC

Server in Beta testing on VSC Cloud infrastructure : [https://www.usegalaxy.be](https://www.usegalaxy.be)

![:scale 100%](images/Galaxy_VSC.png)


---

# ELIXIR Galaxy Community

.center[<img src="images/Galaxy_overview.png" style="height:400px;" />]

Co-chairing with Björn Grüning (de.NBI, ELIXIR Germany) and Gildas Le Corguillé (IFB, ELIXIR France)

???

* A European network of Galaxy communities
* Visualisation in Galaxy
* Galaxy cloud infrastructure across Europe
* Data access & integration in Galaxy
* Bringing Tools and Data together
* Training
* FAIR and Galaxy

---

# Software deployment

https://biocontainers.pro/

.center[<img src="images/BioContainers.png" style="height:350px;" />]

.center[<img src="images/bioconda.png" style="height:70px;" />]

---
class: center, middle

# In practice

![:scale 100%](images/data_in_research.png)

---

# Data Management WG

#### Build a network of Data Stewards
#### Provide a checklist
#### Complementary to DMPonline

### Data Stewardship Wizard

Work in progress:  https://dmp.fairdata.solutions

.center[<img src="images/DataStewardshipWizard.png" style="height:250px;" />]

---

# DMPonline.be

![:scale 100%](images/DMPonline.png)

???

* Online wizard for Data Management Plans
* Internationally used open source software
* Based on templates
  - FWO
  - H2020
  - ...
* Managed by DMPbelgium consortium

---

# FAIRDOMHub

![:scale 100%](images/FAIRDOMHub.png)

???


* Online portal
* Template based: adaptable to domain specific needs
* Integration with analysis platforms possible
* Goal: central portal in Data Life Cycle
* Setting up collaboration within ELIXIR Nodes (H2020 INFRADEV-03)
* Work Package in FWO IRI call ELIXIR Belgium
* EWI project ‘Implementing EOSC: ESFRI driven Open Science’

---

# The Open Science puzzle

* Data: input, intermediate & results
* Tools & workflows
* All associated metadata
* Infrastructure to
  - Store
  - Analyse
  - Publish / share
* Data Management Platform

---

# The Open Science infrastructure puzzle

![:scale 100%](images/infrastructure_vision.png)


---

.right[<img src="images/ELIXIR_logo_white_background.png" height="200px"/>]


#### Data infrastructure for Europe’s life-science research

#### Life-science gateway for the European Open Science Cloud

#### Broadly applicable solutions for common challenges

#### FAIR at the Core

* Data
* Metadata
* Tools & Services
* Analysis workflows
* ...

---

.right[<img src="images/ELIXIR_BELGIUM_white_background.png" height="200px"/>]

# Challenge

### Organize local data & metadata, compatible with daily research and publishing practices

---

class: center, middle

<img src="images/ELIXIR_BELGIUM_white_background.png"  style="height:350px;" />

<img src="images/vib_tagline_pos_rgb.png" style="height:80px" />
<img src="images/belspo.png" height="80px" />
<img src="images/ewi.png" height="80px" />
<img src="images/FWO_Logo_Kleur.jpg" height="80px" />
