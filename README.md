# tinydot

A specification language for JavaScript data and functions inspired by
[Clojure's](http://clojure.org) amazing
[`core.spec`](http://clojure.org/about/spec).

## Philosophy :thought_balloon:

- Needs to play well with existing tooling
  - Toolkits (lodash, underscore, ramda, mori, etc)
    - A lot of these toolkits have gobs of useful predicates
  - Testing frameworks (mocha, jasmine, etc)
    - We could throw exceptions so you could use existing test frameworks to run
      the specifications.
    - Should eventually allow for automatic generative test cases based on given
      predicates.

## Roadmap

### MVP/0.0.1 :hatching_chick:

- **Predicate spec**
  - conform (`conform`)
    - If valid, returns destructured data conforming to the spec/predicate
    - If invalid, returns ... something falsy?
  - valid (`isValid`)
    - Simple predicate function that returns true/false
    - Should check for membership if "predicate" passed is an array
    - Should check for key-set membership if "predicate" passed is an object

### 1.0.0 :hatched_chick:

- **Documentation**
- **Specs for tinydot** :dog:
- **Registry** (`def`)
  - Maps key names to specs
- **Entity maps** (`keys`)
  - Ability to define keyset membership specs
    - Required and optional keys
  - Should check that values conform to all registered specs
- **Function spec** (`fdef`)
  - Args predicate
  - Return value predicate
  - Relationship of arguments to return value
- **Explain** (`explain`)
  - If value does not conform to supplied spec, return JSON explanation
- **Test tooling integration**
  - Have examples of running this from a test runnner like Mocha

### Stretch :chicken:

- Feature parity with core.spec

## Contributing :revolving_hearts:

Actively looking for contributors! Plenty to talk about as we get this thing off
the ground and there should be some nice low-hanging fruit once we have some
planning and tooling set up.

## LICENSE :fork_and_knife:

This project is MIT-licensed and is free to use and fork. While based on Clojure's
EPL-licensed `core.spec`, it does not actually re-use any of the code from that
project.